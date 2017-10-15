import request from 'superagent'
import cleanDB from './lib/clean-db.js'
import * as server from '../lib/server.js'
import {mockUser} from './lib/mock-user.js'
import * as _ from 'ramda'
import {each, partialRight} from '../lib/util.js'

const API_URL = process.env.API_URL
