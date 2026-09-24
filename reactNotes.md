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
- # imp react hook form
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
