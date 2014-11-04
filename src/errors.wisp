(ns mnw.errors
  "Error reporting helpers")

(defn logError [e]
  (.error console (.-stack e)))
