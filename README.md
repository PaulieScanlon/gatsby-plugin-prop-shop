<a href="https://gatsby-plugin-prop-shop.netlify.com/prop-shop/" target="_blank">
<img src="https://gatsby-plugin-prop-shop.netlify.com/images/prop-shop-og-image.jpg" alt="prop-shop-og-image image" />
</a>

# gatsby-plugin-prop-shop

With **gatsby-plugin-prop-shop** you can get an holistic view of all defined PropTypes in your project.

Oh, and there must be at least one `.js` file in your project containing `propTypes`

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
// gatsby-config.js
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

**gatsby-plugin-prop-shop** will find all PropTypes for files named in the `source` array.

### Options

| Option | Type            | Required | Default | Description                                        |
| ------ | --------------- | -------- | ------- | -------------------------------------------------- |
| source | array or string | yes      | null    | Where to find `.js` files with PropTypes           |
| debug  | boolean         | no       | false   | Logs to console paths to the `.js` named in source |

### Run it!

You can now run either `gatsby develop` or `gatsby build / serve` and then navigate to the `/prop-shop` page

```sh
 ---------------------------------
  http://localhost:8000/prop-shop
 ---------------------------------
```

### Psst!

If you're using **gatsby-plugin-prop-shop** in a theme you might need to be more explicit with where the `source` directories can be found eg;

```js
// gatsby-config.js
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

If you're using **gatsby-plugin-prop-shop** in your project i'd love to hear from you [@pauliescanlon](https://twitter.com/PaulieScanlon)

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/P5P31B7G8)
