import React from 'react';

import { SafeAreaView, View, Text, Image } from 'react-native'
import { Button } from './shared'

import styles from './styles'

class App extends React.Component{

  state = {
    images: [
      require('./images/jh.png'),
      require('./images/jk.png'),
      require('./images/jm.png'),
      require('./images/jn.png'),
      require('./images/rm.png'),
      require('./images/sg.png'),
      require('./images/v.png'),
    ],
    counter: 0
  }

  next = () => {
    if(this.state.counter === this.state.images.length - 1 ){
      this.setState({counter: 0})
    }else{
      this.setState({counter: this.state.counter + 1})
    }
  }
  
  previous = () => {
    if(this.state.counter === 0 ){
      this.setState({counter: this.state.images.length - 1})
    }else{
      this.setState({counter: this.state.counter - 1})
    }
  }

  render(){
    return(
      <SafeAreaView>
        <View style={ styles.container }>
          <Image source={this.state.images[this.state.counter]} style={ styles.img } />
          
          <Text style={ styles.counter }>{this.state.counter + 1}/7</Text>
          
          <View style={ styles.btns }>
            <Button text='Anterior' handler={this.previous}/>
            <Button text='Próximo' handler={this.next} />
          </View>
        </View>
      </SafeAreaView>
    )
  }
  }

export { App }