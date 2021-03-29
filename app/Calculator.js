import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function Calculator() {
  const [number, setNumber] = useState('')
  const [side1, setSide1] = useState('')
  const [form, setForm] = useState('')
  const [side2, setSide2] = useState('')
  const [out, setOut] = useState('')

  const Math = () => {
    let answer = 0
    switch (form) {
      case '*':
        answer = +side1 * +number
        break
      case '/':
        answer = +side1 / +number
        break
      case '-':
        answer = +side1 - +number
        break
      case '+':
        answer = +side1 + +number
        break
      case '%':
        answer = +side1 % +number
        break
    }
    setNumber(answer.toString())
  }

  return (
    <View style={styles.view}>
      <View style={styles.output}>
        <View style={styles.windowOutput}>
          <Text style={styles.side}>
            {side1} {form} {side2} {out}
          </Text>
          <Text style={styles.enter}>{number}</Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <View style={{ display: 'flex' }}>
          <Grid>
            <Col style={styles.col4}>
              <Row style={styles.row}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    setNumber('')
                    setSide1('')
                    setForm('')
                    setSide2('')
                    setOut('')
                  }}
                >
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>C</Text>
                  </View>
                </TouchableOpacity>
              </Row>
              <Row style={styles.row}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    let c = number + 7
                    setNumber(c)
                  }}
                >
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>7</Text>
                  </View>
                </TouchableOpacity>
              </Row>
              <Row style={styles.row}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    let c = number + 4
                    setNumber(c)
                  }}
                >
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>4</Text>
                  </View>
                </TouchableOpacity>
              </Row>
              <Row style={styles.row}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    let c = number + 1
                    setNumber(c)
                  }}
                >
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>1</Text>
                  </View>
                </TouchableOpacity>
              </Row>
              <Row style={styles.row}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    let c = number + 0
                    setNumber(c)
                  }}
                >
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>0</Text>
                  </View>
                </TouchableOpacity>
              </Row>
            </Col>
            <Col style={styles.col4}>
              <Row style={styles.row}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    if (number) {
                      setForm('%')
                      setSide1(number)
                      setSide2('')
                      setNumber('')
                      setOut('')
                    }
                  }}
                >
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>%</Text>
                  </View>
                </TouchableOpacity>
              </Row>
              <Row style={styles.row}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    let c = number + 8
                    setNumber(c)
                  }}
                >
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>8</Text>
                  </View>
                </TouchableOpacity>
              </Row>
              <Row style={styles.row}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    let c = number + 5
                    setNumber(c)
                  }}
                >
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>5</Text>
                  </View>
                </TouchableOpacity>
              </Row>
              <Row style={styles.row}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    let c = number + 2
                    setNumber(c)
                  }}
                >
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>2</Text>
                  </View>
                </TouchableOpacity>
              </Row>
              <Row style={styles.row}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    if (number == false) {
                      let c = 0 + '.'
                      setNumber(c)
                    } else {
                      if (number.indexOf('.') > -1) {
                      } else {
                        let c = number + '.'
                        setNumber(c)
                      }
                    }
                  }}
                >
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>.</Text>
                  </View>
                </TouchableOpacity>
              </Row>
            </Col>
            <Col style={styles.col2}>
              <Row style={{ height: height * 0.56 }}>
                <Col>
                  <Row>
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => {
                        if (number) {
                          setForm('/')
                          setSide1(number)
                          setSide2('')
                          setNumber('')
                          setOut('')
                        }
                      }}
                    >
                      <View style={styles.button}>
                        <Text style={styles.buttonText}>/</Text>
                      </View>
                    </TouchableOpacity>
                  </Row>
                  <Row style={styles.row}>
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => {
                        let c = number + 9
                        setNumber(c)
                      }}
                    >
                      <View style={styles.button}>
                        <Text style={styles.buttonText}>9</Text>
                      </View>
                    </TouchableOpacity>
                  </Row>
                  <Row style={styles.row}>
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => {
                        let c = number + 6
                        setNumber(c)
                      }}
                    >
                      <View style={styles.button}>
                        <Text style={styles.buttonText}>6</Text>
                      </View>
                    </TouchableOpacity>
                  </Row>
                  <Row style={styles.row}>
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => {
                        let c = number + 3
                        setNumber(c)
                      }}
                    >
                      <View style={styles.button}>
                        <Text style={styles.buttonText}>3</Text>
                      </View>
                    </TouchableOpacity>
                  </Row>
                </Col>
                <Col style={{ height: height * 0.56 }}>
                  <Row style={styles.row}>
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => {
                        if (number) {
                          setForm('*')
                          setSide1(number)
                          setSide2('')
                          setNumber('')
                          setOut('')
                        }
                      }}
                    >
                      <View style={styles.button}>
                        <Text style={styles.buttonText}>x</Text>
                      </View>
                    </TouchableOpacity>
                  </Row>
                  <Row style={styles.row}>
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => {
                        if (number) {
                          setForm('-')
                          setSide1(number)
                          setSide2('')
                          setNumber('')
                          setOut('')
                        }
                      }}
                    >
                      <View style={styles.button}>
                        <Text style={styles.buttonText}>-</Text>
                      </View>
                    </TouchableOpacity>
                  </Row>
                  <Row style={styles.row2}>
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => {
                        if (number) {
                          setForm('+')
                          setSide1(number)
                          setSide2('')
                          setNumber('')
                          setOut('')
                        }
                      }}
                    >
                      <View
                        style={[styles.button, { height: width / 2.5 + 15 }]}
                      >
                        <Text style={styles.buttonText}>+</Text>
                      </View>
                    </TouchableOpacity>
                  </Row>
                </Col>
              </Row>
              <Row style={{ height: height * 0.14, width: width / 2 }}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    setSide2(number)
                    setOut('=')
                    Math()
                  }}
                >
                  <View style={[styles.button, { width: width / 2.5 + 20 }]}>
                    <Text style={styles.buttonText}>=</Text>
                  </View>
                </TouchableOpacity>
              </Row>
            </Col>
            {/* <Row>
            <TouchableOpacity>
              <View style={styles.button}>
                <Text style={styles.buttonText}>.</Text>
              </View>
            </TouchableOpacity>
          </Row> */}
          </Grid>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#C3EFF0',
    paddingTop: 20,
  },
  output: {
    height: height * 0.2,
    width: width,
    padding: 20,
  },
  windowOutput: {
    backgroundColor: '#F7FDFF',
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  button: {
    backgroundColor: '#8FC6DA',
    width: '100%',
    width: width / 5,
    height: width / 5,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  buttonText: {
    color: '#555242',
    fontSize: 20,
  },
  col4: {
    width: width / 4,
    height: height * 0.7,
  },
  col2: {
    width: width / 2,
    height: height * 0.7,
  },
  row: {
    width: width / 4,
    height: height * 0.14,
  },
  row2: {
    width: width / 4,
    height: height * 0.28,
  },
  enter: {
    fontSize: 24,
  },
  side: {
    color: '#555',
    fontSize: 18,
  },
})
