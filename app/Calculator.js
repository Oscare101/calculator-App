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
import { Feather, MaterialIcons } from '@expo/vector-icons'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function Calculator() {
  const [number, setNumber] = useState('')
  const [side1, setSide1] = useState('')
  const [form, setForm] = useState('')
  const [side2, setSide2] = useState('')
  const [out, setOut] = useState('')
  const [theme, setTheme] = useState('day')

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

  const Theme = () => {
    if (theme == 'day') {
      return <Feather name="sun" size={24} color="black" />
    } else {
      return <MaterialIcons name="nightlight-round" size={24} color="white" />
    }
  }

  return (
    <View style={[theme == 'day' ? styles.viewD : styles.viewN]}>
      <View style={styles.output}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={[
              theme == 'day' ? styles.windowOutputD : styles.windowOutputN,
            ]}
          >
            <Text style={[theme == 'day' ? styles.sideD : styles.sideN]}>
              {side1} {form} {side2} {out}
            </Text>
            <Text style={[theme == 'day' ? styles.enterD : styles.enterN]}>
              {number}
            </Text>
          </View>
          <TouchableOpacity
            style={{ margin: 20 }}
            onPress={() => {
              if (theme == 'day') {
                setTheme('night')
              } else {
                setTheme('day')
              }
              Theme()
            }}
          >
            <Theme />
          </TouchableOpacity>
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
                  <View
                    style={[theme == 'day' ? styles.buttonD : styles.buttonN]}
                  >
                    <Text
                      style={[
                        theme == 'day'
                          ? styles.buttonTextD
                          : styles.buttonTextN,
                      ]}
                    >
                      C
                    </Text>
                  </View>
                </TouchableOpacity>
              </Row>
              <Row style={styles.row}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    if (out) {
                      setNumber('7')
                      setForm('')
                      setSide2('')
                      setSide1('')
                      setOut('')
                    } else {
                      let c = number + '7'
                      setNumber(c)
                    }
                  }}
                >
                  <View
                    style={[theme == 'day' ? styles.buttonD : styles.buttonN]}
                  >
                    <Text
                      style={[
                        theme == 'day'
                          ? styles.buttonTextD
                          : styles.buttonTextN,
                      ]}
                    >
                      7
                    </Text>
                  </View>
                </TouchableOpacity>
              </Row>
              <Row style={styles.row}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    if (out) {
                      setNumber('4')
                      setForm('')
                      setSide2('')
                      setSide1('')
                      setOut('')
                    } else {
                      let c = number + '4'
                      setNumber(c)
                    }
                  }}
                >
                  <View
                    style={[theme == 'day' ? styles.buttonD : styles.buttonN]}
                  >
                    <Text
                      style={[
                        theme == 'day'
                          ? styles.buttonTextD
                          : styles.buttonTextN,
                      ]}
                    >
                      4
                    </Text>
                  </View>
                </TouchableOpacity>
              </Row>
              <Row style={styles.row}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    if (out) {
                      setNumber('1')
                      setForm('')
                      setSide2('')
                      setSide1('')
                      setOut('')
                    } else {
                      let c = number + '1'
                      setNumber(c)
                    }
                  }}
                >
                  <View
                    style={[theme == 'day' ? styles.buttonD : styles.buttonN]}
                  >
                    <Text
                      style={[
                        theme == 'day'
                          ? styles.buttonTextD
                          : styles.buttonTextN,
                      ]}
                    >
                      1
                    </Text>
                  </View>
                </TouchableOpacity>
              </Row>
              <Row style={styles.row}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    if (out) {
                      setNumber('0')
                      setForm('')
                      setSide2('')
                      setSide1('')
                      setOut('')
                    } else {
                      let c = number + '0'
                      setNumber(c)
                    }
                  }}
                >
                  <View
                    style={[theme == 'day' ? styles.buttonD : styles.buttonN]}
                  >
                    <Text
                      style={[
                        theme == 'day'
                          ? styles.buttonTextD
                          : styles.buttonTextN,
                      ]}
                    >
                      0
                    </Text>
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
                  <View
                    style={[theme == 'day' ? styles.buttonD : styles.buttonN]}
                  >
                    <Text
                      style={[
                        theme == 'day'
                          ? styles.buttonTextD
                          : styles.buttonTextN,
                      ]}
                    >
                      %
                    </Text>
                  </View>
                </TouchableOpacity>
              </Row>
              <Row style={styles.row}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    if (out) {
                      setNumber('8')
                      setForm('')
                      setSide2('')
                      setSide1('')
                      setOut('')
                    } else {
                      let c = number + '8'
                      setNumber(c)
                    }
                  }}
                >
                  <View
                    style={[theme == 'day' ? styles.buttonD : styles.buttonN]}
                  >
                    <Text
                      style={[
                        theme == 'day'
                          ? styles.buttonTextD
                          : styles.buttonTextN,
                      ]}
                    >
                      8
                    </Text>
                  </View>
                </TouchableOpacity>
              </Row>
              <Row style={styles.row}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    if (out) {
                      setNumber('5')
                      setForm('')
                      setSide2('')
                      setSide1('')
                      setOut('')
                    } else {
                      let c = number + '5'
                      setNumber(c)
                    }
                  }}
                >
                  <View
                    style={[theme == 'day' ? styles.buttonD : styles.buttonN]}
                  >
                    <Text
                      style={[
                        theme == 'day'
                          ? styles.buttonTextD
                          : styles.buttonTextN,
                      ]}
                    >
                      5
                    </Text>
                  </View>
                </TouchableOpacity>
              </Row>
              <Row style={styles.row}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    if (out) {
                      setNumber('2')
                      setForm('')
                      setSide2('')
                      setSide1('')
                      setOut('')
                    } else {
                      let c = number + '2'
                      setNumber(c)
                    }
                  }}
                >
                  <View
                    style={[theme == 'day' ? styles.buttonD : styles.buttonN]}
                  >
                    <Text
                      style={[
                        theme == 'day'
                          ? styles.buttonTextD
                          : styles.buttonTextN,
                      ]}
                    >
                      2
                    </Text>
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
                  <View
                    style={[theme == 'day' ? styles.buttonD : styles.buttonN]}
                  >
                    <Text
                      style={[
                        theme == 'day'
                          ? styles.buttonTextD
                          : styles.buttonTextN,
                      ]}
                    >
                      .
                    </Text>
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
                      <View
                        style={[
                          theme == 'day' ? styles.buttonD : styles.buttonN,
                        ]}
                      >
                        <Text
                          style={[
                            theme == 'day'
                              ? styles.buttonTextD
                              : styles.buttonTextN,
                          ]}
                        >
                          /
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </Row>
                  <Row style={styles.row}>
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => {
                        if (out) {
                          setNumber('9')
                          setForm('')
                          setSide2('')
                          setSide1('')
                          setOut('')
                        } else {
                          let c = number + '9'
                          setNumber(c)
                        }
                      }}
                    >
                      <View
                        style={[
                          theme == 'day' ? styles.buttonD : styles.buttonN,
                        ]}
                      >
                        <Text
                          style={[
                            theme == 'day'
                              ? styles.buttonTextD
                              : styles.buttonTextN,
                          ]}
                        >
                          9
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </Row>
                  <Row style={styles.row}>
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => {
                        if (out) {
                          setNumber('6')
                          setForm('')
                          setSide2('')
                          setSide1('')
                          setOut('')
                        } else {
                          let c = number + '6'
                          setNumber(c)
                        }
                      }}
                    >
                      <View
                        style={[
                          theme == 'day' ? styles.buttonD : styles.buttonN,
                        ]}
                      >
                        <Text
                          style={[
                            theme == 'day'
                              ? styles.buttonTextD
                              : styles.buttonTextN,
                          ]}
                        >
                          6
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </Row>
                  <Row style={styles.row}>
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => {
                        if (out) {
                          setNumber('3')
                          setForm('')
                          setSide2('')
                          setSide1('')
                          setOut('')
                        } else {
                          let c = number + '3'
                          setNumber(c)
                        }
                      }}
                    >
                      <View
                        style={[
                          theme == 'day' ? styles.buttonD : styles.buttonN,
                        ]}
                      >
                        <Text
                          style={[
                            theme == 'day'
                              ? styles.buttonTextD
                              : styles.buttonTextN,
                          ]}
                        >
                          3
                        </Text>
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
                      <View
                        style={[
                          theme == 'day' ? styles.buttonD : styles.buttonN,
                        ]}
                      >
                        <Text
                          style={[
                            theme == 'day'
                              ? styles.buttonTextD
                              : styles.buttonTextN,
                          ]}
                        >
                          x
                        </Text>
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
                      <View
                        style={[
                          theme == 'day' ? styles.buttonD : styles.buttonN,
                        ]}
                      >
                        <Text
                          style={[
                            theme == 'day'
                              ? styles.buttonTextD
                              : styles.buttonTextN,
                          ]}
                        >
                          -
                        </Text>
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
                        style={[
                          theme == 'day' ? styles.buttonD : styles.buttonN,
                          { height: width / 2.5 + 15 },
                        ]}
                      >
                        <Text
                          style={[
                            theme == 'day'
                              ? styles.buttonTextD
                              : styles.buttonTextN,
                          ]}
                        >
                          +
                        </Text>
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
                  <View
                    style={[
                      theme == 'day' ? styles.buttonD : styles.buttonN,
                      { width: width / 2.5 + 20 },
                    ]}
                  >
                    <Text
                      style={[
                        theme == 'day'
                          ? styles.buttonTextD
                          : styles.buttonTextN,
                      ]}
                    >
                      =
                    </Text>
                  </View>
                </TouchableOpacity>
              </Row>
            </Col>
            {/* <Row>
            <TouchableOpacity>
              <View style={[ theme == 'day' ? styles.buttonD : styles.buttonN ]}>
                <Text style={[ theme == 'day' ? styles.buttonTextD : styles.buttonTextN ]}>.</Text>
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
  viewD: {
    flex: 1,
    backgroundColor: '#C3EFF0',
    paddingTop: 20,
  },
  viewN: {
    flex: 1,
    backgroundColor: '#2b2b2b',
    paddingTop: 20,
  },
  mode: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  output: {
    height: height * 0.2,
    width: width,
    padding: 20,
  },
  windowOutputD: {
    backgroundColor: '#F7FDFF',
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  windowOutputN: {
    backgroundColor: '#3b3b3b',
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  buttonD: {
    backgroundColor: '#8FC6DA',
    width: '100%',
    width: width / 5,
    height: width / 5,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  buttonN: {
    backgroundColor: '#666',
    width: '100%',
    width: width / 5,
    height: width / 5,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  buttonTextD: {
    color: '#555242',
    fontSize: 20,
  },
  buttonTextN: {
    color: '#f4f4f4',
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
  enterD: {
    color: '#333',
    fontSize: 24,
  },
  enterN: {
    color: '#BEF3DA',
    fontSize: 24,
  },
  sideD: {
    color: '#555',
    fontSize: 18,
  },
  sideN: {
    color: '#B9B9B9',
    fontSize: 18,
  },
})
