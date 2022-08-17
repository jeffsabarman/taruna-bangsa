import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
// import { ServerStyleSheets } from '@material-ui/core/styles';
// import {ServerStyleSheets} from "@mui/material/styles"
// import {} from "@mui/styles"
// import { GA_TRACKING_ID } from "utils/gtag";

export default class MyDocument extends Document {
  //   static async getInitialProps(ctx: any) {
  //     const sheets = new ServerStyleSheets();
  //     const originalRenderPage = ctx.renderPage;

  //     ctx.renderPage = () =>
  //       originalRenderPage({
  //         enhanceApp: (App: any) => (props: any) => sheets.collect(<App {...props} />),
  //       });

  //     const initialProps = await Document.getInitialProps(ctx);

  //     return {
  //       ...initialProps,
  //       styles: [
  //         ...React.Children.toArray(initialProps.styles),
  //         sheets.getStyleElement(),
  //       ],
  //     };
  //   }

  render() {
    return (
      <Html>
        <Head>
          {/* <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config','${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
            }}
          /> */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          /> */}
          {/* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> */}
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          ></link>
          <script
            src="https://accounts.google.com/gsi/client"
            async
            defer
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
