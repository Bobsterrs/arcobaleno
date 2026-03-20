"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calculator } from "lucide-react"

const voucherData: Record<string, { M: number, F: number }> = {
  "0-5": { M: 56, F: 56 },
  "6-9": { M: 70, F: 70 },
  "10-13": { M: 100, F: 90 },
  "14-17": { M: 124, F: 99 },
  "18-59": { M: 110, F: 90 },
  "60+": { M: 89, F: 75 }
}

export function VoucherCalculator() {
  const [gender, setGender] = useState<"M" | "F">("M")
  const [ageGroup, setAgeGroup] = useState("18-59")

  return (
    <div className="flex flex-col md:flex-row items-center gap-12 w-full">
      <div className="md:w-1/2 w-full">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-amber-100">
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-500 mb-4 uppercase tracking-wider">Genere</label>
            <div className="flex gap-4">
              {["M", "F"].map((g) => (
                <button
                  key={g}
                  onClick={() => setGender(g as "M" | "F")}
                  className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all ${gender === g
                    ? "bg-amber-500 text-white shadow-md scale-105"
                    : "bg-gray-50 text-gray-400 hover:bg-gray-100"
                    }`}
                >
                  {g === "M" ? "Maschio" : "Femmina"}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-500 mb-4 uppercase tracking-wider">Fascia d'età</label>
            <select
              value={ageGroup}
              onChange={(e) => setAgeGroup(e.target.value)}
              className="w-full bg-gray-50 border-none rounded-xl py-4 px-6 text-lg focus:ring-2 focus:ring-amber-500 cursor-pointer"
            >
              <option value="0-5">6 mesi - 5 Anni</option>
              <option value="6-9">6 - 9 Anni</option>
              <option value="10-13">10 - 13 Anni</option>
              <option value="14-17">14 - 17 Anni</option>
              <option value="18-59">18 - 59 Anni</option>
              <option value="60+">60 e oltre</option>
            </select>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 w-full flex items-center justify-center">
        <div className="relative group w-full max-w-sm">
          <motion.div
            initial={false}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-amber-200 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"
          ></motion.div>
          <div className="relative w-full bg-white p-12 md:p-16 rounded-[40px] shadow-2xl border border-amber-50 flex flex-col items-center text-center">
            <div className="bg-amber-100 p-4 rounded-2xl mb-6">
              <Calculator className="w-8 h-8 text-amber-600" />
            </div>
            <span className="text-gray-400 uppercase tracking-[0.2em] text-sm mb-2">Importo Mensile</span>
            <AnimatePresence mode="wait">
              <motion.div
                key={`${gender}-${ageGroup}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex items-baseline"
              >
                <span className="text-7xl md:text-8xl font-serif font-bold text-amber-500">
                  {voucherData[ageGroup][gender]}
                </span>
                <span className="text-3xl font-serif font-bold text-amber-500 ml-2">€</span>
              </motion.div>
            </AnimatePresence>
            <p className="mt-8 text-gray-400 text-sm font-light">
              Spendibile nell'arco del mese in corso.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
