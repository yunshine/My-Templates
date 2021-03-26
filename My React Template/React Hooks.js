/*

1) the useState hook - used to create and change state;

const [blogs, setBlogs] = useState([]);
const [name, setName] = useState('Yun');
setName('Eunjoo');
console.log(name)  // will 'Eunjooo';


==================================================================================================


2) the useEffect hook - this hook runs a function at every render of the component such as when it first loads and/or when the state changes...;

useEffect(() => {
  console.log("running useEffect...");
}, []);
    // dependency array options: [ ] an empty array like this will run the useEffect hook on only the initial render; [name] useEffect runs when the value for 'name' changes; [blogs] useEffect runs when the value for 'blogs' changes...


==================================================================================================


3) the useHistory hook - used to redirect to a specific route or page...;

// first, to use the useHistory hook, you need to invoke the hook...
const history = useHistory();
history.push('/')


==================================================================================================


*/