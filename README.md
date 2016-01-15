# Light7 - a light and easy to use UI lib for webapp

Light7 is a fork of [Framework7](https://github.com/nolimits4web/Framework7). Framework7 is a very amazing framework for build webapp. I use it in my project last year.

But I find it's to hard to learn, and most time I only need a simple UI lib instead of a heavy framework. So, I forked Framework7 and rewrite it to be Light7 - a very light and easy to use UI lib.I have fix some compatibility problems on Android 4.0~4.2 too.

For more docs please visit [Light7 Website](http://light7.org/)

# Download

Please clone this repo and compile by yourself. The `master` branch contains only source file, You can clone and change to `build` branch to get all compiled files under `dist/`.

# Install Grunt

- Install `grunt` first, see [Grunt](http://gruntjs.com/) for how to install and use grunt, if you have never used grunt before.
- Then, run `npm install` under the root dir of this repo. This command will install the nodejs packages required by grunt.
- Now, you can run `grunt` to compile the source file.


# Grunt

exec `grunt` to compile all source file, and the compiled file is in `dist` dir.

`grunt watch` to enter `watch mode`.

# Offline docs

exec `jekyll serve` to open local server. You should install [ruby](https://www.ruby-lang.org/en/documentation/installation/), and then install `jekyll` and `rouge`.

Also, you can change to `build` branch, you will find all compiled docs under `_site`.

**Don't open `docs` dir in your browser please**

# Compatibility

- iOS 6+
- Android 4.0+

Create issue if you find any compatibility problems.

# Contact me

- mailto: lihongxun945@gmail.com
- forum is coming...
