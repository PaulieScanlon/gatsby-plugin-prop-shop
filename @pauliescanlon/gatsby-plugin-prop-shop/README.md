<a href="https://gatsby-plugin-prop-shop.netlify.com/prop-shop/" target="_blank">
<img src="https://gatsby-plugin-prop-shop.netlify.com/images/prop-shop-og-image.jpg" alt="prop-shop-og-image image" />
</a>

# gatsby-plugin-prop-shop

**gatsby-plugin-prop-shop** provides an holistic view of all defined PropTypes or type definitions in your Gatsby project.

Oh, and there must be at least one `.js` file in your project containing `propTypes` or one `.tsx` file containing an `interface` or `type`

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

If you see any errors relating to Gatsby or React check the peerDependencies versions [here](https://github.com/PaulieScanlon/gatsby-plugin-prop-shop/blob/master/%40pauliescanlon/gatsby-plugin-prop-shop/package.json#L29)

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

or perhaps you need to jump out a level

```js
// gatsby-config.js
module.exports = {
  ...
  plugins: [
    {
      resolve: `@pauliescanlon/gatsby-plugin-prop-shop`,
      options: {
        source: [path.resolve(`${process.cwd()}/../components/src`)],
      },
    },
  ]
  ...
}
```

If you haven't used `PropTypes` before here's a _bit_ of an example.

```js
...
import PropTypes from 'prop-types'

export const Say = ({ words }) => <div>{words}</div>

Say.propTypes = {
  /** Some words that the component must say  */
  words: PropTypes.string.isRequired
}

```

If you're using `TypeScript` your `interface` or `type` _might_ look like this.

```js
...
interface IProps {
  /** Some words that the component must say  */
  words: string;
}

export const Say: React.FunctionComponent<IProps> = ({ words }) => (
  <div>{words}</div>
)
```

If you're using **gatsby-plugin-prop-shop** in your project i'd love to hear from you [@pauliescanlon](https://twitter.com/PaulieScanlon)

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/P5P31B7G8)
