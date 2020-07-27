import {
  BRAND_DESCRIPTION,
  BRAND_KEYWORDS,
  BRAND_TITLE,
} from "@utils/constants";
import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/favicon.png" />
          <meta name="theme-color" content="#F47847" />
          <title>Meronex Icons — React Icons Package</title>
          <meta name="title" content="Meronex Icons — React Icons Package" />
          <meta
            name="description"
            content="A rich set of all the popular icons packaged as react components."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://metatags.io/" />
          <meta
            property="og:title"
            content="Meronex Icons — React Icons Package"
          />
          <meta
            property="og:description"
            content="A rich set of all the popular icons packaged as react components."
          />
          <meta
            property="og:image"
            content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://metatags.io/" />
          <meta
            property="twitter:title"
            content="Meronex Icons — React Icons Package"
          />
          <meta
            property="twitter:description"
            content="A rich set of all the popular icons packaged as react components."
          />
          <meta
            property="twitter:image"
            content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
          />
          <meta name="title" content={BRAND_TITLE} />
          <meta name="description" content={BRAND_DESCRIPTION} />
          <meta name="keywords" content={BRAND_KEYWORDS} />
          <link rel="manifest" href="/manifest.json" />
          <script
            async
            src="https://unpkg.com/pwacompat"
            crossOrigin="anonymous"
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

export default MyDocument;
