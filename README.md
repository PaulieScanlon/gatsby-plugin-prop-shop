<a href="https://gatsby-plugin-prop-shop.netlify.com/prop-shop/" target="_blank">
<img src="https://gatsby-plugin-prop-shop.netlify.com/images/prop-shop-og-image.jpg.jpg" alt="prop-shop-og-image image" />
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
npm install gatsby-source-filesystem --save
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
        source: [`pages`, `images`, `components`],
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
