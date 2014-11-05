(ns mnw.macros
  "Common macros")

(defmacro bind-fn [f & params]
  `(.bind ~f nil ~@params))

(defmacro ->
  "Chain promises"
  [& operations]
  (reduce
   (fn [form operation]
     (cons `.then
       (if (vector? operation)
         (cons form operation)
         (list form operation))))
   operations))
