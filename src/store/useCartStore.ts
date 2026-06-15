"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import {
  ConfigurationDraft,
  QuoteRequest,
  CartItem,
} from "@/types";
import { generateReferenceId } from "@/lib/calculations";

interface CartState {
  items: CartItem[];
  configuration: ConfigurationDraft;
  quote: QuoteRequest | null;
  referenceId: string;
  submittedAt: string | null;
  addItem: (productId: string, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearItems: () => void;
  setConfiguration: (config: Partial<ConfigurationDraft>) => void;
  clearConfiguration: () => void;
  setQuote: (quote: QuoteRequest) => void;
  clearQuote: () => void;
  markSubmitted: () => void;
}

const defaultConfiguration: ConfigurationDraft = {
  industryType: "",
  projectSize: "",
  powerRequirements: "",
  installationLocation: "",
  timeline: "",
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      configuration: { ...defaultConfiguration },
      quote: null,
      referenceId: generateReferenceId(),
      submittedAt: null,

      addItem: (productId, quantity = 1) => {
        const existing = get().items.find((i) => i.productId === productId);
        if (existing) {
          set({
            items: get().items.map((i) =>
              i.productId === productId
                ? { ...i, quantity: i.quantity + quantity }
                : i
            ),
          });
        } else {
          set({ items: [...get().items, { productId, quantity }] });
        }
      },

      removeItem: (productId) => {
        set({ items: get().items.filter((i) => i.productId !== productId) });
      },

      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        set({
          items: get().items.map((i) =>
            i.productId === productId ? { ...i, quantity } : i
          ),
        });
      },

      clearItems: () => set({ items: [] }),

      setConfiguration: (config) => {
        set({ configuration: { ...get().configuration, ...config } });
      },

      clearConfiguration: () =>
        set({ configuration: { ...defaultConfiguration } }),

      setQuote: (quote) => set({ quote }),

      clearQuote: () => set({ quote: null, submittedAt: null }),

      markSubmitted: () => set({ submittedAt: new Date().toISOString() }),
    }),
    {
      name: "neo-energy-cart",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        items: state.items,
        configuration: state.configuration,
        quote: state.quote,
        referenceId: state.referenceId,
        submittedAt: state.submittedAt,
      }),
    }
  )
);
