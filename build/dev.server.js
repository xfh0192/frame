const express = require('express')
const webpack = require('webpack')
const path = require('path')
const webpackConfig = require('./webpack.base.conf')

const server = express()
const compiler = webpack(webpackConfig)

const 
