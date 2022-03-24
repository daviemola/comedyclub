import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/css/animate.css" />
          <link rel="stylesheet" href="/css/font-awesome.min.css" />
          <link rel="stylesheet" href="/css/date-ui.min.css" />
          <link rel="stylesheet" href="/css/nice-select.css" />
          <link rel="stylesheet" href="/css/style.css" />
          <link rel="stylesheet" href="/css/daterangepicker.css" />
          <link rel="stylesheet" href="/css/responsive.css" />
          <link rel="stylesheet" type="text/css" href="slick/slick.css" />
          <link rel="stylesheet" type="text/css" href="slick/slick-theme.css" />
        </Head>
        <body data-spy="scroll" data-offset="70">
          <Main />
          <NextScript />
          <script src="/js/jquery.min.js"></script>
          <script src="/js/bootstrap.min.js"></script>
          <script src="/js/jquery.nice-select.js"></script>
          <script src="/js/wow.js"></script>
          <script src="/js/moment.min.js"></script>
          <script src="/js/daterangepicker.js"></script>
          <script src="/js/popper.min.js"></script>
          <script src="/js/smoothscroll.min.js"></script>
          <script src="/js/custom.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
