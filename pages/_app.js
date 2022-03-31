// import Router from "next/router";
// import React from "react";
// import { AnimatePresence } from "framer-motion";

// function MyApp({ Component, pageProps }) {
//   const [loading, setLoading] = React.useState(false);

//   Router.events.on("routeChangeStart", (url) => {
//     setLoading(true);
//   });

//   Router.events.on("routeChangeComplete", (url) => {
//     setLoading(false);
//   });

//   return (
//     <>
//       {/* {loading && (
//         <div className="preloader">
//           <div className="lds-ripple">
//             <div></div>
//             <div></div>
//           </div>
//         </div>
//       )} */}
//       <AnimatePresence exitBeforeEnter>
//         <Component {...pageProps} />
//       </AnimatePresence>
//     </>
//   );
// }

// export default MyApp;

import React from "react";
import App from "next/app";
import { AnimatePresence } from "framer-motion";

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    // <Component/> returns the component it self
    // pageProps returns the props you use to in that component. It can be any data
    // router.route returns the route your component lives on. So in our case it will be '/' or '/products/[id]'
    // exitBeforeEnter: AnimatePresence will only render one component at a time. The exiting component will finished its exit animation before the entering component is rendered
    return (
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    );
  }
}

export default MyApp;
