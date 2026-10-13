## props and state
- hooks - it can only be call inside a functional component
- useState() -> contain two value in an array [state, setState]
- state - current value
- setState - It call inside function and in an any event to prevent infinite re-render loop.
- batches 
- form handling
- state lifting up - parents are used as props to send message between their siblings
* Props: Parent → Child
- useRef - A hook, used to fetch real dom element
- ## imp react hook form
 1.  useForm - contain many things
   * register
   * handleSubmit
   * reset
   * formState

- DSM - data sharing manager 
  * context API - just a higher order component

- GSM - global state manager
  * redux
  * zustand

- useEffect - use for handling side effects  
  * component life cycle 
     1. unmounting phase - creation and render
     2. updation phase - updation ho rha hai
     3. mounting phase - render tree se remove hoga

- react router - used in multiple pages navigation without reloading
  1. declarative approach
  2. data approach

- protected route -> used in authentication

- react-tostify
- nanoid - used to generate unique id 

## context api 
## axios and interceptors
## Memoization
- react-memoization - functional component ka refrence store karta hai.
- useCallback - function ka reference type store karta hai. it contains dependency array . it works same as like useeffect . 
- useMemo - only use when you need to memoize a expensive calculation result.

## custom hook

- Debouncing - means hamesha ek change/action ke baad chalta rahega 
 * usecase - live location sharing
- Throttling - mujhe matlab nhi hai tum kitne bhi action do me tab hi chalunga jab mera time
  * use case - lazy loading mtlb scrollbar wali loading jaise intagram lekin ab usme bhi nhi hota ab hota hai usme (tanstack query)

- code splitting - jo page jarurat hai utna hi reload karega , use lazy react help se. 
 * lazy
 * loader
 * suspense
 

- suspense - jab tak page load nhi hoga jab tak pura chij na aa jaye isko data routing ke element par use karte hai