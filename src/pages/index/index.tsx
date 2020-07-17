import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AtButton } from 'taro-ui'
import { View, Text } from '@tarojs/components'

import './index.scss'

// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

type PageStateProps = {
  counter: {
    num: number
  }
}

type PageDispatchProps = {
  app: {
    counter: number,
  },
  dispatch: (arg: { type: string, payload?: any }) => void
}

type PageOwnProps = {}

const namespace: string = 'app'
// type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;
}

@connect(({ app, loading }) => ({
  app,
  loading,
}))
class Index extends Component {
  // componentWillReceiveProps (nextProps) {
  //   console.log(this.props, nextProps)
  // }
  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { app, dispatch } = this.props
    console.log('props', this.props)
    return (
      <View className='index'>
        <AtButton type='primary' className='add_btn' onClick={() => { dispatch({ type: `${namespace}/add` })}}>+</AtButton>
        <AtButton type='secondary' className='dec_btn' onClick={() => { dispatch({ type: `${namespace}/dec` })}}>-</AtButton>
        <View><Text>{app.counter}</Text></View>
        <View><Text>Hello, World</Text></View>
      </View>
    )
  }
}

export default Index

