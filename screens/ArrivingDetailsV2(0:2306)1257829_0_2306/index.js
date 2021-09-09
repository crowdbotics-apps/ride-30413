import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b010/a8a5/31492f35c7918f4df463d47cdeaecb2a"
        }}
        style={styles.ImageBackground_0_4251}
      />
      <View style={styles.View_0_2307}>
        <View style={styles.View_0_3645}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6222/82f0/4356e2408c4db2bab45085a1c8c1f798"
            }}
            style={styles.ImageBackground_I0_3645_0_2776}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b04/ac13/fc3cc8c0c0d20749678cad4ad4adbd6e"
            }}
            style={styles.ImageBackground_I0_3645_0_2781}
          />
          <View style={styles.View_I0_3645_0_2782}>
            <View style={styles.View_I0_3645_0_2783} />
            <View style={styles.View_I0_3645_0_2784}>
              <Text style={styles.Text_I0_3645_0_2784}>HS785K</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e007/3e7e/c8345701136f234c587329cfc5c9185e"
            }}
            style={styles.ImageBackground_I0_3645_0_2785}
          />
          <View style={styles.View_I0_3645_0_2787}>
            <Text style={styles.Text_I0_3645_0_2787}>Volkswagen Jetta</Text>
          </View>
          <View style={styles.View_I0_3645_0_2788}>
            <Text style={styles.Text_I0_3645_0_2788}>Patrick</Text>
          </View>
          <View style={styles.View_I0_3645_0_2789}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e611/7a98/fcaa3ac1ffb2f0917af9ddaac7e57dc6"
              }}
              style={styles.ImageBackground_I0_3645_0_2790}
            />
            <View style={styles.View_I0_3645_0_2791}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ac9/032d/10a1ba149157cd008dfd740e4f2c9908"
                }}
                style={styles.ImageBackground_I0_3645_0_2792}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4297/f2e9/8bd998fa721baaaa5139d765ce6db676"
                }}
                style={styles.ImageBackground_I0_3645_0_2793}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_0_2565}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33fd/f4bc/b2b0099015dc785a3695a76ea3a81a4e"
            }}
            style={styles.ImageBackground_I0_2565_0_2563}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e7e/cc70/ec79d94966085d65bdecc86ecfe4613e"
            }}
            style={styles.ImageBackground_I0_2565_0_2566}
          />
        </View>
        <View style={styles.View_0_2550}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33fd/f4bc/b2b0099015dc785a3695a76ea3a81a4e"
            }}
            style={styles.ImageBackground_I0_2550_0_331}
          />
          <View style={styles.View_I0_2550_0_1955}>
            <View style={styles.View_I0_2550_0_1955_0_1959} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2065/9d5d/c96eead534d42b48f26cb605c5ee0a06"
              }}
              style={styles.ImageBackground_I0_2550_0_1955_0_1956}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77bd/4dc8/6de546c7a48f67637301102a768b772b"
              }}
              style={styles.ImageBackground_I0_2550_0_1955_0_1960}
            />
          </View>
        </View>
        <View style={styles.View_0_2553}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33fd/f4bc/b2b0099015dc785a3695a76ea3a81a4e"
            }}
            style={styles.ImageBackground_I0_2553_0_2551}
          />
          <View style={styles.View_I0_2553_0_2554}>
            <View style={styles.View_I0_2553_0_2554_0_2561} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24aa/d1d2/dbc418fd6fa8953e3cc9b9ecaa9349de"
              }}
              style={styles.ImageBackground_I0_2553_0_2554_0_2555}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/450e/5e68/b7e8c16c5367d2f751baafa965ed6584"
              }}
              style={styles.ImageBackground_I0_2553_0_2554_0_2562}
            />
          </View>
        </View>
        <View style={styles.View_0_2309}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd26/50cf/439c3ded6582ea1ee20aab701bc48ac4"
            }}
            style={styles.ImageBackground_0_2310}
          />
          <View style={styles.View_0_2311}>
            <Text style={styles.Text_0_2311}>2</Text>
          </View>
        </View>
        <View style={styles.View_0_3510}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/997e/4e48/074058c6583b0619224bbff17029bad1"
            }}
            style={styles.ImageBackground_I0_3510_0_3498}
          />
          <View style={styles.View_I0_3510_0_3500}>
            <Text style={styles.Text_I0_3510_0_3500}>11:24</Text>
          </View>
          <View style={styles.View_I0_3510_0_3501}>
            <Text style={styles.Text_I0_3510_0_3501}>11:38</Text>
          </View>
          <View style={styles.View_I0_3510_0_3502}>
            <Text style={styles.Text_I0_3510_0_3502}>
              Ealing Broadway Shopping Centre, London, W55JY, UK
            </Text>
          </View>
          <View style={styles.View_I0_3510_0_3503}>
            <Text style={styles.Text_I0_3510_0_3503}>
              1, Thrale Street, London, SE19HW, UK
            </Text>
          </View>
          <View style={styles.View_I0_3510_0_3504}>
            <View style={styles.View_I0_3510_0_3505} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f3b/1720/9b9525e0b059ef600cd824c99dd658da"
              }}
              style={styles.ImageBackground_I0_3510_0_3506}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9bff/bdc0/535fb3efec3e47666412df7f3ba46275"
              }}
              style={styles.ImageBackground_I0_3510_0_3507}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c4c/87a9/0c5d8d050036c78f3586be9b91044baf"
              }}
              style={styles.ImageBackground_I0_3510_0_3508}
            />
          </View>
        </View>
        <View style={styles.View_0_2893}>
          <View style={styles.View_I0_2893_0_2872} />
          <View style={styles.View_I0_2893_0_2888} />
          <View style={styles.View_I0_2893_0_2875}>
            <View style={styles.View_I0_2893_0_2874}>
              <Text style={styles.Text_I0_2893_0_2874}>**** 8295</Text>
            </View>
            <View style={styles.View_I0_2893_0_2877}>
              <View style={styles.View_I0_2893_0_2876}>
                <View
                  source={{ uri: "null" }}
                  style={styles.View_I0_2893_0_2876_0_346}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecad/e90a/8c183b46769f58a1866b5b483ed146a3"
                  }}
                  style={styles.ImageBackground_I0_2893_0_2876_0_348}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_2308}>
        <View style={styles.View_I0_2308_0_1894}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4583/1d47/78db0c5e7ab4def1037bc4f2365e8400"
            }}
            style={styles.ImageBackground_I0_2308_0_1893}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e7e/cc70/ec79d94966085d65bdecc86ecfe4613e"
            }}
            style={styles.ImageBackground_I0_2308_0_1922}
          />
        </View>
        <View style={styles.View_I0_2308_0_1899}>
          <Text style={styles.Text_I0_2308_0_1899}>Arriving</Text>
        </View>
        <View style={styles.View_I0_2308_0_1901}>
          <View style={styles.View_I0_2308_0_1902}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b62/81d1/4984941f11cdbf5335986581bf641a2c"
              }}
              style={styles.ImageBackground_I0_2308_0_1903}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
              }}
              style={styles.ImageBackground_I0_2308_0_1907}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
              }}
              style={styles.ImageBackground_I0_2308_0_1908}
            />
            <View style={styles.View_I0_2308_0_1909}>
              <View style={styles.View_I0_2308_0_1910}>
                <Text style={styles.Text_I0_2308_0_1910}>9:41</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_0_4251: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_0_2307: {
    width: wp("100.26666666666667%"),
    minWidth: wp("100.26666666666667%"),
    height: hp("85.10928961748634%"),
    minHeight: hp("85.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.26666666666666666%"),
    top: hp("25.81967213114754%")
  },
  View_0_3645: {
    flexGrow: 1,
    width: wp("100.26666666666667%"),
    height: hp("85.10928961748634%"),
    minHeight: hp("85.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_3645_0_2776: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("78.27868852459017%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%"),
    top: hp("6.830601092896174%")
  },
  ImageBackground_I0_3645_0_2781: {
    flexGrow: 1,
    width: wp("30.933333333333334%"),
    height: hp("15.846994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_3645_0_2782: {
    flexGrow: 1,
    width: wp("22.133333333333333%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.53333333333333%"),
    top: hp("13.79781420765027%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_3645_0_2783: {
    width: wp("25.333333333333336%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3.200000000000003%"),
    top: hp("0%"),
    backgroundColor: "rgba(213, 221, 224, 1)",
    borderColor: "rgba(213, 222, 226, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I0_3645_0_2784: {
    width: wp("22.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.6666666666666714%"),
    top: hp("0.546448087431699%"),
    justifyContent: "center"
  },
  Text_I0_3645_0_2784: {
    color: "rgba(62, 73, 88, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  ImageBackground_I0_3645_0_2785: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.66666666666667%"),
    top: hp("8.879781420765028%")
  },
  View_I0_3645_0_2787: {
    flexGrow: 1,
    width: wp("44.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.4%"),
    top: hp("18.032786885245898%"),
    justifyContent: "flex-start"
  },
  Text_I0_3645_0_2787: {
    color: "rgba(62, 73, 88, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_3645_0_2788: {
    flexGrow: 1,
    width: wp("49.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666667%"),
    top: hp("14.071038251366119%"),
    justifyContent: "flex-start"
  },
  Text_I0_3645_0_2788: {
    color: "rgba(62, 73, 88, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I0_3645_0_2789: {
    flexGrow: 1,
    width: wp("18.666666666666668%"),
    height: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("3.1420765027322375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_3645_0_2790: {
    width: wp("18.666666666666668%"),
    height: hp("9.562841530054644%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_3645_0_2791: {
    width: wp("18.666666666666668%"),
    height: hp("9.562841530054644%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_3645_0_2792: {
    width: wp("18.666666666666668%"),
    height: hp("9.562841530054644%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_3645_0_2793: {
    width: wp("18.666666666666668%"),
    height: hp("9.562841530054644%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_0_2565: {
    width: wp("17.333333333333336%"),
    height: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93333333333334%"),
    top: hp("71.58469945355192%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_2565_0_2563: {
    flexGrow: 1,
    width: wp("17.333333333333336%"),
    height: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_2565_0_2566: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.799999999999997%"),
    top: hp("2.4590163934426243%")
  },
  View_0_2550: {
    width: wp("17.333333333333336%"),
    height: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666667%"),
    top: hp("71.58469945355192%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_2550_0_331: {
    flexGrow: 1,
    width: wp("17.333333333333336%"),
    height: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_2550_0_1955: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.466666666666667%"),
    top: hp("1.775956284152997%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_2550_0_1955_0_1959: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0
  },
  ImageBackground_I0_2550_0_1955_0_1956: {
    flexGrow: 1,
    width: wp("6.74372812906901%"),
    height: hp("3.4721379723053816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7841145833333325%"),
    top: hp("1.0655470884562845%")
  },
  ImageBackground_I0_2550_0_1955_0_1960: {
    flexGrow: 1,
    width: wp("3.5999999999999996%"),
    height: hp("1.8442742811526105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.461197916666665%"),
    top: hp("0.8196721311475414%")
  },
  View_0_2553: {
    width: wp("17.333333333333336%"),
    height: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.6%"),
    top: hp("71.58469945355192%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_2553_0_2551: {
    flexGrow: 1,
    width: wp("17.333333333333336%"),
    height: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_2553_0_2554: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666686%"),
    top: hp("1.775956284152997%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_2553_0_2554_0_2561: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0
  },
  ImageBackground_I0_2553_0_2554_0_2555: {
    flexGrow: 1,
    width: wp("6.933333333333333%"),
    height: hp("3.5615253969619833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8644531249999972%"),
    top: hp("0.9562841530054698%")
  },
  ImageBackground_I0_2553_0_2554_0_2562: {
    flexGrow: 1,
    width: wp("7.466669718424479%"),
    height: hp("3.835762003080441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5977864583333314%"),
    top: hp("0.8196721311475414%")
  },
  View_0_2309: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.133333333333326%"),
    top: hp("71.31147540983606%")
  },
  ImageBackground_0_2310: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_2311: {
    width: wp("2.177777862548828%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333347%"),
    top: hp("0.4804100495218506%"),
    justifyContent: "center"
  },
  Text_0_2311: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_0_3510: {
    flexGrow: 1,
    width: wp("88.8%"),
    height: hp("24.863387978142075%"),
    minHeight: hp("24.863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666667%"),
    top: hp("27.322404371584696%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_3510_0_3498: {
    flexGrow: 1,
    width: wp("88.8%"),
    height: hp("24.863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_3510_0_3500: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("3.961748633879779%"),
    justifyContent: "flex-start"
  },
  Text_I0_3510_0_3500: {
    color: "rgba(151, 173, 182, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_3510_0_3501: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333332%"),
    top: hp("14.89071038251366%"),
    justifyContent: "flex-start"
  },
  Text_I0_3510_0_3501: {
    color: "rgba(151, 173, 182, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_3510_0_3502: {
    flexGrow: 1,
    width: wp("58.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.93333333333333%"),
    top: hp("14.89071038251366%"),
    justifyContent: "flex-start"
  },
  Text_I0_3510_0_3502: {
    color: "rgba(62, 73, 88, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_3510_0_3503: {
    flexGrow: 1,
    width: wp("58.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.93333333333333%"),
    top: hp("3.825136612021865%"),
    justifyContent: "flex-start"
  },
  Text_I0_3510_0_3503: {
    color: "rgba(62, 73, 88, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_3510_0_3504: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("3.6885245901639365%")
  },
  View_I0_3510_0_3505: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("8.879781420765028%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0
  },
  ImageBackground_I0_3510_0_3506: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0.9562841530054698%")
  },
  ImageBackground_I0_3510_0_3507: {
    width: wp("0.5731898625691731%"),
    minWidth: wp("0.5731898625691731%"),
    height: hp("8.811742230191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8717447916666679%"),
    top: hp("2.595361594945352%")
  },
  ImageBackground_I0_3510_0_3508: {
    width: wp("2.4%"),
    minWidth: wp("2.4%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9333333333333336%"),
    top: hp("12.021857923497265%")
  },
  View_0_2893: {
    flexGrow: 1,
    width: wp("88.8%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666667%"),
    top: hp("54.918032786885234%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_2893_0_2872: {
    flexGrow: 1,
    width: wp("88.8%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 248, 249, 1)",
    borderColor: "rgba(151, 173, 182, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_I0_2893_0_2888: {
    flexGrow: 1,
    width: wp("14.133333333333335%"),
    height: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.26666666666667%"),
    top: hp("2.049180327868868%")
  },
  View_I0_2893_0_2875: {
    flexGrow: 1,
    width: wp("34.93333333333333%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("2.049180327868868%")
  },
  View_I0_2893_0_2874: {
    width: wp("22.933333333333334%"),
    minWidth: wp("22.933333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.000000000000002%"),
    top: hp("0.6830601092896131%"),
    justifyContent: "center"
  },
  Text_I0_2893_0_2874: {
    color: "rgba(62, 73, 88, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_2893_0_2877: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_2893_0_2876: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_2893_0_2876_0_346: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_2893_0_2876_0_348: {
    flexGrow: 1,
    width: wp("6.6824590047200525%"),
    height: hp("2.1871183739333855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6584635416666664%"),
    top: hp("0.9562841530054556%")
  },
  View_0_2308: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_2308_0_1894: {
    flexGrow: 1,
    width: wp("9.6%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3.6885245901639343%")
  },
  ImageBackground_I0_2308_0_1893: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_2308_0_1922: {
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    top: hp("0.4098360655737703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999998%")
  },
  View_I0_2308_0_1899: {
    flexGrow: 1,
    width: wp("63.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%"),
    top: hp("4.781420765027322%"),
    justifyContent: "flex-start"
  },
  Text_I0_2308_0_1899: {
    color: "rgba(62, 73, 88, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I0_2308_0_1901: {
    flexGrow: 1,
    width: wp("86.93333333333332%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%"),
    top: hp("0.819672131147541%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_2308_0_1902: {
    width: wp("86.808544921875%"),
    height: hp("2.3224043715846996%"),
    top: hp("-0.20491803278688525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.05442708333333268%")
  },
  ImageBackground_I0_2308_0_1903: {
    width: wp("6.354143269856771%"),
    minWidth: wp("6.354143269856771%"),
    height: hp("1.4116576460541272%"),
    minHeight: hp("1.4116576460541272%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.45442708333333%"),
    top: hp("0.3187836193647542%")
  },
  ImageBackground_I0_2308_0_1907: {
    width: wp("4.072635142008464%"),
    minWidth: wp("4.072635142008464%"),
    height: hp("1.49802888026003%"),
    minHeight: hp("1.49802888026003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.90611979166667%"),
    top: hp("0.25007737790300555%")
  },
  ImageBackground_I0_2308_0_1908: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    height: hp("1.4571948129622663%"),
    minHeight: hp("1.4571948129622663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.03216145833333%"),
    top: hp("0.2959704789959017%")
  },
  View_I0_2308_0_1909: {
    width: wp("7.466666666666668%"),
    height: hp("2.3224043715846996%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_2308_0_1910: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_2308_0_1910: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
