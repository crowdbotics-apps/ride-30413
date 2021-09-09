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
      <View style={styles.View_0_4523}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b010/a8a5/31492f35c7918f4df463d47cdeaecb2a"
          }}
          style={styles.ImageBackground_0_4524}
        />
        <View style={styles.View_0_4525}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df7d/c6f6/c1b2912ec08a2ed6c5868d9792c52da5"
            }}
            style={styles.ImageBackground_0_4526}
          />
          <View style={styles.View_0_4527}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0495/9c05/c3b5e9d64df083b3bd689f4312d7773e"
              }}
              style={styles.ImageBackground_I0_4527_0_2857}
            />
            <View style={styles.View_I0_4527_0_2859}>
              <View style={styles.View_I0_4527_0_2859_0_2833} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b344/e7e9/93fa91051f713ed36cba66f699c227b5"
                }}
                style={styles.ImageBackground_I0_4527_0_2859_0_2835}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e007/3e7e/c8345701136f234c587329cfc5c9185e"
            }}
            style={styles.ImageBackground_0_4528}
          />
          <View style={styles.View_0_4529}>
            <View style={styles.View_0_4530}>
              <View style={styles.View_I0_4530_0_2041} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d5d/e01b/d94788d940d6e56193a4445c080fb67c"
                }}
                style={styles.ImageBackground_I0_4530_0_108}
              />
              <View style={styles.View_I0_4530_0_114}>
                <Text style={styles.Text_I0_4530_0_114}>New York</Text>
              </View>
              <View style={styles.View_I0_4530_0_116}>
                <Text style={styles.Text_I0_4530_0_116}>
                  67, Grand Central Pkwy
                </Text>
              </View>
              <View style={styles.View_I0_4530_0_2040}>
                <View style={styles.View_I0_4530_0_2040_0_101}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f23b/1684/35e96330ac1378d03380d40637bf6fde"
                    }}
                    style={styles.ImageBackground_I0_4530_0_2040_0_100}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ffb/28d8/047cae73662f477142f605ba72979f1e"
                    }}
                    style={styles.ImageBackground_I0_4530_0_2040_0_103}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_0_4531}>
              <View style={styles.View_I0_4531_0_2041} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d5d/e01b/d94788d940d6e56193a4445c080fb67c"
                }}
                style={styles.ImageBackground_I0_4531_0_108}
              />
              <View style={styles.View_I0_4531_0_114}>
                <Text style={styles.Text_I0_4531_0_114}>New York</Text>
              </View>
              <View style={styles.View_I0_4531_0_116}>
                <Text style={styles.Text_I0_4531_0_116}>
                  67, Grand Central Pkwy
                </Text>
              </View>
              <View style={styles.View_I0_4531_0_2040}>
                <View style={styles.View_I0_4531_0_2040_0_101}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f23b/1684/35e96330ac1378d03380d40637bf6fde"
                    }}
                    style={styles.ImageBackground_I0_4531_0_2040_0_100}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ffb/28d8/047cae73662f477142f605ba72979f1e"
                    }}
                    style={styles.ImageBackground_I0_4531_0_2040_0_103}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_0_4532}>
              <View style={styles.View_I0_4532_0_2041} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d5d/e01b/d94788d940d6e56193a4445c080fb67c"
                }}
                style={styles.ImageBackground_I0_4532_0_108}
              />
              <View style={styles.View_I0_4532_0_114}>
                <Text style={styles.Text_I0_4532_0_114}>New York</Text>
              </View>
              <View style={styles.View_I0_4532_0_116}>
                <Text style={styles.Text_I0_4532_0_116}>
                  Kings Cross Underground Statio...
                </Text>
              </View>
              <View style={styles.View_I0_4532_0_2040}>
                <View style={styles.View_I0_4532_0_2040_0_101}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f23b/1684/35e96330ac1378d03380d40637bf6fde"
                    }}
                    style={styles.ImageBackground_I0_4532_0_2040_0_100}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ffb/28d8/047cae73662f477142f605ba72979f1e"
                    }}
                    style={styles.ImageBackground_I0_4532_0_2040_0_103}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_0_4533}>
              <View style={styles.View_I0_4533_0_2041} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d5d/e01b/d94788d940d6e56193a4445c080fb67c"
                }}
                style={styles.ImageBackground_I0_4533_0_108}
              />
              <View style={styles.View_I0_4533_0_114}>
                <Text style={styles.Text_I0_4533_0_114}>New York</Text>
              </View>
              <View style={styles.View_I0_4533_0_116}>
                <Text style={styles.Text_I0_4533_0_116}>83, Midwood St</Text>
              </View>
              <View style={styles.View_I0_4533_0_2040}>
                <View style={styles.View_I0_4533_0_2040_0_101}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f23b/1684/35e96330ac1378d03380d40637bf6fde"
                    }}
                    style={styles.ImageBackground_I0_4533_0_2040_0_100}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ffb/28d8/047cae73662f477142f605ba72979f1e"
                    }}
                    style={styles.ImageBackground_I0_4533_0_2040_0_103}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_0_4534} />
        </View>
        <View style={styles.View_0_4535}>
          <View style={styles.View_0_4536}>
            <View style={styles.View_0_4537}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d02/4e48/5f27f430f9099398ff9822cb3c620e0f"
                }}
                style={styles.ImageBackground_I0_4537_10_12399}
              />
            </View>
            <View style={styles.View_0_4538}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b98a/b52e/4535bd407937afe7c1ac25e956c7cc16"
                }}
                style={styles.ImageBackground_I0_4538_10_12399}
              />
            </View>
            <View style={styles.View_0_4539}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9853/8cbc/86fbeb336267c161a34f8b4bddc225da"
                }}
                style={styles.ImageBackground_I0_4539_10_12399}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_0_4544}>
          <View style={styles.View_I0_4544_0_2579} />
          <View style={styles.View_I0_4544_0_2582}>
            <View style={styles.View_I0_4544_0_2582_0_2583} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f81/615b/c905de50fdbd0ee3a4bced5fa47d8bea"
              }}
              style={styles.ImageBackground_I0_4544_0_2582_0_2584}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5a2/78a3/539a159a7b5ba232ba97bf61e743991e"
              }}
              style={styles.ImageBackground_I0_4544_0_2582_0_2591}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf0d/1f09/97a2b81daf7408cfd5fac08662b39fce"
          }}
          style={styles.ImageBackground_0_4545}
        />
        <View style={styles.View_0_4546}>
          <View style={styles.View_I0_4546_0_3098} />
          <View style={styles.View_I0_4546_0_3100}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8f8/5f54/a4e1122c3ce7b88380c474643d3631e4"
              }}
              style={styles.ImageBackground_I0_4546_0_3101}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/090a/5c37/0377ca288976f956d39078a66fbcd539"
              }}
              style={styles.ImageBackground_I0_4546_0_3102}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ebf/a74a/08c7ec6a8c0fd260c767738aa4476a14"
              }}
              style={styles.ImageBackground_I0_4546_0_3105}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4c7/7eba/500460151974bba55e8e59fe7550a3d8"
              }}
              style={styles.ImageBackground_I0_4546_0_3106}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af15/7f53/f63061d74f5fd17bab124f9d5c3971eb"
              }}
              style={styles.ImageBackground_I0_4546_0_3107}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/358c/e6d2/63875da59f79070e4fefcd679b8c4558"
              }}
              style={styles.ImageBackground_I0_4546_0_3110}
            />
          </View>
        </View>
        <View style={styles.View_0_4547}>
          <View style={styles.View_I0_4547_0_339}>
            <View style={styles.View_I0_4547_0_341} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b411/5732/c2a1d5a0d4af525c1b580a5289831fd8"
              }}
              style={styles.ImageBackground_I0_4547_0_342}
            />
          </View>
          <View style={styles.View_I0_4547_0_343}>
            <Text style={styles.Text_I0_4547_0_343}>3 min</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_2451} />
      <View style={styles.View_0_3381}>
        <View style={styles.View_0_2464}>
          <View style={styles.View_0_3380} />
          <View style={styles.View_0_2466}>
            <View style={styles.View_0_2465}>
              <Text style={styles.Text_0_2465}>Sign out</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c5d/e0d3/74f1257e9167723660d91eade23811e6"
              }}
              style={styles.ImageBackground_0_3817}
            />
          </View>
          <View style={styles.View_0_2453}>
            <View style={styles.View_0_2452}>
              <View style={styles.View_0_2454}>
                <Text style={styles.Text_0_2454}>Ride history</Text>
              </View>
            </View>
            <View style={styles.View_0_2455}>
              <View style={styles.View_0_2456}>
                <Text style={styles.Text_0_2456}>Payment </Text>
              </View>
            </View>
            <View style={styles.View_0_2457}>
              <View style={styles.View_0_2458}>
                <Text style={styles.Text_0_2458}>Promocode</Text>
              </View>
            </View>
            <View style={styles.View_0_2459}>
              <View style={styles.View_0_2460}>
                <Text style={styles.Text_0_2460}>Support</Text>
              </View>
            </View>
            <View style={styles.View_0_3544}>
              <View style={styles.View_I0_3544_0_3545} />
              <View style={styles.View_I0_3544_0_3449} />
              <View style={styles.View_I0_3544_0_3451}>
                <Text style={styles.Text_I0_3544_0_3451}>1</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_2462}>
          <View style={styles.View_0_2471} />
          <View style={styles.View_0_2463}>
            <Text style={styles.Text_0_2463}>carson@mobility.com</Text>
          </View>
          <View style={styles.View_0_2461}>
            <Text style={styles.Text_0_2461}>Carson</Text>
          </View>
          <View style={styles.View_0_3556}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be4b/bf15/d0229ce6b92a0dc52661eecf336d5402"
              }}
              style={styles.ImageBackground_I0_3556_0_3460}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca5a/4358/0933be402538394f9665d2738b31cc5e"
              }}
              style={styles.ImageBackground_I0_3556_0_3462}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_3079}>
        <View style={styles.View_I0_3079_0_3081} />
        <View style={styles.View_I0_3079_0_3082}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/946e/0802/252fed3a27f9613f643960d82fe7677f"
            }}
            style={styles.ImageBackground_I0_3079_0_3080}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cc7/48fe/6d58f34907fdfaad9090c0236c7a2911"
            }}
            style={styles.ImageBackground_I0_3079_0_3083}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71f8/5b31/422621ec511749133f334941f28603b4"
            }}
            style={styles.ImageBackground_I0_3079_0_3084}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ef4/a530/c0e9c2e8da6da8804302ea1b23ae1537"
            }}
            style={styles.ImageBackground_I0_3079_0_3085}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ef4/a530/c0e9c2e8da6da8804302ea1b23ae1537"
            }}
            style={styles.ImageBackground_I0_3079_0_3086}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_0_4523: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("127.04918032786885%"),
    minHeight: hp("127.04918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_4524: {
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
  View_0_4525: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("51.09289617486339%"),
    minHeight: hp("51.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("75.95628415300546%")
  },
  ImageBackground_0_4526: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("35.10928961748634%"),
    minHeight: hp("35.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_4527: {
    flexGrow: 1,
    width: wp("88.8%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("5.464480874316948%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_4527_0_2857: {
    flexGrow: 1,
    width: wp("88.8%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_4527_0_2859: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666665%"),
    top: hp("1.3661202185792405%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_4527_0_2859_0_2833: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.009999999776482582
  },
  ImageBackground_I0_4527_0_2859_0_2835: {
    flexGrow: 1,
    width: wp("4.15%"),
    height: hp("2.1260245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333346%"),
    top: hp("0.9562841530054556%")
  },
  ImageBackground_0_4528: {
    width: wp("8%"),
    height: hp("0%"),
    top: hp("2.049180327868868%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.86666666666667%")
  },
  View_0_4529: {
    width: wp("88.8%"),
    minWidth: wp("88.8%"),
    height: hp("34.42622950819672%"),
    minHeight: hp("34.42622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("16.66666666666667%")
  },
  View_0_4530: {
    flexGrow: 1,
    width: wp("88.8%"),
    height: hp("8.333333333333332%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26.092896174863398%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_4530_0_2041: {
    flexGrow: 1,
    width: wp("88.8%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0
  },
  ImageBackground_I0_4530_0_108: {
    flexGrow: 1,
    width: wp("77.60000000000001%"),
    height: hp("0.000003369540700375973%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.2%"),
    top: hp("8.1967213114754%")
  },
  View_I0_4530_0_114: {
    flexGrow: 1,
    width: wp("65.60000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.2%"),
    top: hp("3.6885245901639365%"),
    justifyContent: "flex-start"
  },
  Text_I0_4530_0_114: {
    color: "rgba(151, 173, 182, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_4530_0_116: {
    flexGrow: 1,
    width: wp("65.60000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.2%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "center"
  },
  Text_I0_4530_0_116: {
    color: "rgba(62, 73, 88, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_4530_0_2040: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_4530_0_2040_0_101: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_4530_0_2040_0_100: {
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_4530_0_2040_0_103: {
    width: wp("2.822222391764323%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.967757428278702%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5562499999999995%")
  },
  View_0_4531: {
    flexGrow: 1,
    width: wp("88.8%"),
    height: hp("8.333333333333332%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.486338797814213%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_4531_0_2041: {
    flexGrow: 1,
    width: wp("88.8%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0
  },
  ImageBackground_I0_4531_0_108: {
    flexGrow: 1,
    width: wp("77.60000000000001%"),
    height: hp("0.000003369540700375973%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.2%"),
    top: hp("8.196721311475414%")
  },
  View_I0_4531_0_114: {
    flexGrow: 1,
    width: wp("65.60000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.2%"),
    top: hp("3.6885245901639365%"),
    justifyContent: "flex-start"
  },
  Text_I0_4531_0_114: {
    color: "rgba(151, 173, 182, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_4531_0_116: {
    flexGrow: 1,
    width: wp("65.60000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.2%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "center"
  },
  Text_I0_4531_0_116: {
    color: "rgba(62, 73, 88, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_4531_0_2040: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_4531_0_2040_0_101: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_4531_0_2040_0_100: {
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_4531_0_2040_0_103: {
    width: wp("2.822222391764323%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.967757428278702%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5562499999999995%")
  },
  View_0_4532: {
    flexGrow: 1,
    width: wp("88.8%"),
    height: hp("8.333333333333332%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_4532_0_2041: {
    flexGrow: 1,
    width: wp("88.8%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0
  },
  ImageBackground_I0_4532_0_108: {
    flexGrow: 1,
    width: wp("77.60000000000001%"),
    height: hp("0.000003369540700375973%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.2%"),
    top: hp("8.1967213114754%")
  },
  View_I0_4532_0_114: {
    flexGrow: 1,
    width: wp("65.60000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.2%"),
    top: hp("3.6885245901639365%"),
    justifyContent: "flex-start"
  },
  Text_I0_4532_0_114: {
    color: "rgba(151, 173, 182, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_4532_0_116: {
    flexGrow: 1,
    width: wp("65.60000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.2%"),
    top: hp("1.092896174863398%"),
    justifyContent: "center"
  },
  Text_I0_4532_0_116: {
    color: "rgba(62, 73, 88, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_4532_0_2040: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792405%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_4532_0_2040_0_101: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_4532_0_2040_0_100: {
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_4532_0_2040_0_103: {
    width: wp("2.822222391764323%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.9677574282786878%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5562499999999995%")
  },
  View_0_4533: {
    flexGrow: 1,
    width: wp("88.8%"),
    height: hp("8.333333333333332%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.606557377049185%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_4533_0_2041: {
    flexGrow: 1,
    width: wp("88.8%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0
  },
  ImageBackground_I0_4533_0_108: {
    flexGrow: 1,
    width: wp("77.60000000000001%"),
    height: hp("0.000003369540700375973%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.2%"),
    top: hp("8.1967213114754%")
  },
  View_I0_4533_0_114: {
    flexGrow: 1,
    width: wp("65.60000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.2%"),
    top: hp("3.6885245901639365%"),
    justifyContent: "flex-start"
  },
  Text_I0_4533_0_114: {
    color: "rgba(151, 173, 182, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_4533_0_116: {
    flexGrow: 1,
    width: wp("65.60000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.2%"),
    top: hp("1.092896174863398%"),
    justifyContent: "center"
  },
  Text_I0_4533_0_116: {
    color: "rgba(62, 73, 88, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_4533_0_2040: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_4533_0_2040_0_101: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_4533_0_2040_0_100: {
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_4533_0_2040_0_103: {
    width: wp("2.822222391764323%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.9677574282786878%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5562499999999995%")
  },
  View_0_4534: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("9.562845699122695%"),
    minHeight: hp("9.562845699122695%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25.5464480874317%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_4535: {
    width: wp("69.56250813802083%"),
    minWidth: wp("69.56250813802083%"),
    height: hp("46.86032071139643%"),
    minHeight: hp("46.86032071139643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.133333333333333%"),
    top: hp("13.553540172472678%")
  },
  View_0_4536: {
    width: wp("69.56250813802083%"),
    minWidth: wp("69.56250813802083%"),
    height: hp("34.11781436107198%"),
    minHeight: hp("34.11781436107198%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.7961866034836067%")
  },
  View_0_4537: {
    width: wp("12.837703450520833%"),
    height: hp("7.205215829317687%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26.912568306010925%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_4537_10_12399: {
    flexGrow: 1,
    width: wp("13.346248372395833%"),
    height: hp("7.465110841344615%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.18203125000000142%"),
    top: hp("-0.04242443647540739%"),
    resizeMode: "cover"
  },
  View_0_4538: {
    width: wp("14.26500752766927%"),
    height: hp("5.494564348231248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.46666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_4538_10_12399: {
    flexGrow: 1,
    width: wp("14.735066731770832%"),
    height: hp("5.737190559262135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.38450520833333%"),
    top: hp("-0.17750224129098413%"),
    resizeMode: "cover"
  },
  View_0_4539: {
    width: wp("7.96250712076823%"),
    height: hp("6.918376651617998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.6%"),
    top: hp("26.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_4539_10_12399: {
    flexGrow: 1,
    width: wp("8.370597330729167%"),
    height: hp("7.12459282796891%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.22675781249999716%"),
    top: hp("-0.008871776810110532%"),
    resizeMode: "cover"
  },
  View_0_4544: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.06666666666666%"),
    top: hp("66.39344262295081%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_4544_0_2579: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 173, 182, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I0_4544_0_2582: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333286%"),
    top: hp("0.6830601092896273%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_4544_0_2582_0_2583: {
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
  ImageBackground_I0_4544_0_2582_0_2584: {
    flexGrow: 1,
    width: wp("5.2%"),
    height: hp("2.663934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7333333333333485%"),
    top: hp("1.4002732240437155%")
  },
  ImageBackground_I0_4544_0_2582_0_2591: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.13333333333334%"),
    top: hp("1.0928961748633839%")
  },
  ImageBackground_0_4545: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("39.34426229508197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.266666666666666%")
  },
  View_0_4546: {
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.800000000000004%"),
    top: hp("36.74863387978142%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_4546_0_3098: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_4546_0_3100: {
    flexGrow: 1,
    width: wp("6.056177775065104%"),
    height: hp("5.394434798610667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3111002604166586%"),
    top: hp("0.03642097848360493%")
  },
  ImageBackground_I0_4546_0_3101: {
    width: wp("2.2241175333658854%"),
    height: hp("1.1393982204583173%"),
    top: hp("4.114903517759565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9159830729166671%")
  },
  ImageBackground_I0_4546_0_3102: {
    width: wp("2.7711151123046873%"),
    height: hp("1.419635678901047%"),
    top: hp("3.9748228312841505%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.64235026041667%")
  },
  ImageBackground_I0_4546_0_3105: {
    width: wp("0.4959854125976562%"),
    height: hp("1.6216027932088883%"),
    top: hp("2.9624396985997237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.75833333333334%")
  },
  ImageBackground_I0_4546_0_3106: {
    width: wp("5.782661437988281%"),
    height: hp("2.9624232828942803%"),
    top: hp("0.07004034323770014%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13681640625000568%")
  },
  ImageBackground_I0_4546_0_3107: {
    width: wp("6.056177775065104%"),
    height: hp("3.102540969848633%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_4546_0_3110: {
    width: wp("1.7792892456054688%"),
    height: hp("0.911519175670186%"),
    top: hp("1.095564378415304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1385416666666686%")
  },
  View_0_4547: {
    width: wp("18.666666666666668%"),
    height: hp("4.508192031109919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.8%"),
    top: hp("31.557377049180328%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_4547_0_339: {
    flexGrow: 1,
    width: wp("18.666666666666668%"),
    height: hp("4.508192031109919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_4547_0_341: {
    width: wp("18.666666666666668%"),
    height: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(16, 105, 227, 1)",
    borderColor: "rgba(151, 173, 182, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  ImageBackground_I0_4547_0_342: {
    width: wp("3.7333338419596354%"),
    height: hp("0.6147540983606558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666669%"),
    top: hp("3.8934426229508183%")
  },
  View_I0_4547_0_343: {
    flexGrow: 1,
    width: wp("18.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896167%"),
    justifyContent: "center"
  },
  Text_I0_4547_0_343: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2451: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(62, 73, 88, 1)",
    opacity: 0.800000011920929
  },
  View_0_3381: {
    width: wp("83.2%"),
    minWidth: wp("83.2%"),
    height: hp("111.0655737704918%"),
    minHeight: hp("111.0655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_2464: {
    width: wp("83.2%"),
    minWidth: wp("83.2%"),
    height: hp("111.0655737704918%"),
    minHeight: hp("111.0655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_3380: {
    width: wp("83.2%"),
    minWidth: wp("83.2%"),
    height: hp("111.0655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 173, 182, 1)",
    borderWidth: 1
  },
  View_0_2466: {
    width: wp("49.6%"),
    minWidth: wp("49.6%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666665%"),
    top: hp("98.90710382513662%")
  },
  View_0_2465: {
    width: wp("49.6%"),
    minWidth: wp("49.6%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_0_2465: {
    color: "rgba(17, 82, 253, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_3817: {
    width: wp("15.733333333333333%"),
    minWidth: wp("15.733333333333333%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584668%")
  },
  View_0_2453: {
    width: wp("61.86666666666667%"),
    minWidth: wp("61.86666666666667%"),
    height: hp("29.78142076502732%"),
    minHeight: hp("29.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.600000000000001%"),
    top: hp("46.31147540983606%")
  },
  View_0_2452: {
    width: wp("40.266666666666666%"),
    minWidth: wp("40.266666666666666%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_2454: {
    width: wp("40.266666666666666%"),
    minWidth: wp("40.266666666666666%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_0_2454: {
    color: "rgba(62, 73, 88, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_0_2455: {
    width: wp("57.333333333333336%"),
    minWidth: wp("57.333333333333336%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.15300546448087%")
  },
  View_0_2456: {
    width: wp("57.333333333333336%"),
    minWidth: wp("57.333333333333336%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_0_2456: {
    color: "rgba(62, 73, 88, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_0_2457: {
    width: wp("46.666666666666664%"),
    minWidth: wp("46.666666666666664%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.306010928961754%")
  },
  View_0_2458: {
    width: wp("46.666666666666664%"),
    minWidth: wp("46.666666666666664%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_0_2458: {
    color: "rgba(62, 73, 88, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_0_2459: {
    width: wp("46.666666666666664%"),
    minWidth: wp("46.666666666666664%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27.459016393442624%")
  },
  View_0_2460: {
    width: wp("46.666666666666664%"),
    minWidth: wp("46.666666666666664%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_0_2460: {
    color: "rgba(62, 73, 88, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_0_3544: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.199999999999996%"),
    top: hp("16.803278688524593%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_3544_0_3545: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.009999999776482582
  },
  View_I0_3544_0_3449: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333286%"),
    top: hp("0.6830601092896131%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_I0_3544_0_3451: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333286%"),
    top: hp("1.63934426229509%"),
    justifyContent: "center"
  },
  Text_I0_3544_0_3451: {
    color: "rgba(62, 73, 88, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2462: {
    width: wp("83.2%"),
    minWidth: wp("83.2%"),
    height: hp("35.51912568306011%"),
    minHeight: hp("35.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_2471: {
    width: wp("83.2%"),
    minWidth: wp("83.2%"),
    height: hp("35.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(17, 82, 253, 1)"
  },
  View_0_2463: {
    width: wp("42.93333333333334%"),
    minWidth: wp("42.93333333333334%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666665%"),
    top: hp("29.23497267759563%"),
    justifyContent: "flex-start"
  },
  Text_0_2463: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2461: {
    width: wp("40.266666666666666%"),
    minWidth: wp("40.266666666666666%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666665%"),
    top: hp("25.273224043715846%"),
    justifyContent: "flex-start"
  },
  Text_0_2461: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_0_3556: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666665%"),
    top: hp("12.295081967213115%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_3556_0_3460: {
    flexGrow: 1,
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_3556_0_3462: {
    flexGrow: 1,
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_3079: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.666666666666664%"),
    top: hp("11.33879781420765%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_3079_0_3081: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0
  },
  View_I0_3079_0_3082: {
    flexGrow: 1,
    width: wp("7.978466796875%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_3079_0_3080: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896167%")
  },
  ImageBackground_I0_3079_0_3083: {
    width: wp("3.35483881632487%"),
    minWidth: wp("3.35483881632487%"),
    height: hp("2.117486078231061%"),
    minHeight: hp("2.117486078231061%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.9808743169398912%")
  },
  ImageBackground_I0_3079_0_3084: {
    width: wp("5.655885823567709%"),
    height: hp("2.8977381075666253%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3225911458333357%")
  },
  ImageBackground_I0_3079_0_3085: {
    width: wp("1.2903226216634116%"),
    minWidth: wp("1.2903226216634116%"),
    height: hp("0.6610259332292067%"),
    minHeight: hp("0.6610259332292067%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.967740885416667%"),
    top: hp("1.8508660988729506%")
  },
  ImageBackground_I0_3079_0_3086: {
    width: wp("1.2903226216634116%"),
    minWidth: wp("1.2903226216634116%"),
    height: hp("0.6610259332292067%"),
    minHeight: hp("0.6610259332292067%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.935481770833334%"),
    top: hp("0.39662845799180246%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
