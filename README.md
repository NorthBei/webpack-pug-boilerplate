# webpack-pug-boilerplate

this project is a webpack boilerplate for someone want use webpack4 compile .pug(jade) to html 

so it just install some package about compile .pug file , no more. 

for example , you can compile this pug file

```pug
doctype html
html(lang="en")
  head
    title= pageTitle
    script(type='text/javascript').
      if (foo) bar(1 + 5)
  body
    h1 Pug - node template engine
    #container.col
      if youAreUsingPug
        p You are amazing
      else
        p Get on it!
      p.
        Pug is a terse and simple templating language with a
        strong focus on performance and powerful features.
```

becomes


```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Pug</title>
    <script type="text/javascript">
      if (foo) bar(1 + 5)
    </script>
  </head>
  <body>
    <h1>Pug - node template engine</h1>
    <div id="container" class="col">
      <p>You are amazing</p>
      <p>Pug is a terse and simple templating language with a strong focus on performance and powerful features.</p>
    </div>
  </body>
</html>
```

# register pug file for compilation

### Step1. Place .pug files in right place

In this boilerplate , all .pug files in place in src folder
so you should place your pug files in the same place

### Step2. tell webpack , what pug file should be compiled

In webpack.config.js , you can find code like this

```javascript
...
plugins: [
      new HtmlWebpackPlugin({
          template: './src/index.pug',
          filename:'./index.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/test.pug',
        filename:'./test.html'
      })
],
...
```

if you want your ```example.pug``` will be compiled, 
after you place pug file in src folder,
you should add a new HtmlWebpackPlugin instance to the plugin array.
so it will become

```javascript
...
plugins: [
      new HtmlWebpackPlugin({
          template: './src/index.pug',
          filename:'./index.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/test.pug',
        filename:'./test.html'
      })
      new HtmlWebpackPlugin({
        template: './src/example.pug',
        filename:'./example.html'
      })
],
...
```

At last, you can run the command to compile pug to html~

# Command

### How to compile .pug files ?

use 

```bash
    $ npm run dev:build
```
to compile all /src/*.pug files which has resgister in webpack.config.js


### How to launch webpack-dev-server ?

use 

```bash
    $ npm run dev:serv
 ```

to start run webpack-dev-server 

and the webpack-dev-server is use 9000 port by default.

notice : if you user webpack-dev-server , the build result will just place in memory , won't save as files.


  
