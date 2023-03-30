import React from 'react'
import { createStore } from 'redux'
import { likesdata } from './Reducer'

const store = createStore(likesdata)

export default store