(ns mnw.errors
  "Error reporting helpers")

(defn logError
  "Log error with stack; useful with Promises"
  [e]
  (.error console (.-stack e)))
