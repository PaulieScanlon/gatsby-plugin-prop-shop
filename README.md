<a href="https://gatsby-plugin-prop-shop.netlify.com/prop-shop/" target="_blank">
<img src="https://gatsby-plugin-prop-shop.netlify.com/images/prop-shop-og-image.jpg" alt="prop-shop-og-image image" />
</a>

# gatsby-plugin-prop-shop

With `gatsby-plugin-prop-shop` you can get an holistic view of all defined PropTypes in your project.

## 👁️ Preview

- [Live Demo](https://gatsby-plugin-prop-shop.netlify.com/prop-shop/)

## 🚀 Getting started

### Install

```
npm install @pauliescanlon/gatsby-plugin-prop-shop --save
```

### Install peer dependencies

```
npm install gatsby-source-filesystem prop-types --save
```

### Setup

```js
// gatsby.config
module.exports = {
  ...
  plugins: [
    {
      resolve: `@pauliescanlon/gatsby-plugin-prop-shop`,
      options: {
        source: [`src/pages`, `src/images`, `src/components`],
      },
    },
  ]
  ...
}
```

`gatsby-plugin-prop-shop` will find all PropTypes for files found in the named directories in the `source` array in the config options.

With that all setup you can continue to run either `gatsby develop` or `gatsby build` and then navigate to the `/prop-shop` page

```sh
 ---------------------------------
  http://localhost:8000/prop-shop
 ---------------------------------
```

If you're using PropShop in a theme you might need to be more explicit with where the source directories can be found, eg

```js
// gatsby.config
module.exports = {
  ...
  plugins: [
    {
      resolve: `@pauliescanlon/gatsby-plugin-prop-shop`,
      options: {
        source: [`${__dirname}/src/components`],
      },
    },
  ]
  ...
}
```
