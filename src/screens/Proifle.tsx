// import {
//   Image,
//   Modal,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// // import ImagePicker from 'react-native-image-crop-picker';
// import React, {useEffect, useState} from 'react';
// // import {Avatar, Icon} from '@rneui/themed';
// import {Colors, Images} from '../constants';
// import {horizontalScale, verticalScale} from '../utils/Dim';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {
//   responsiveHeight,
//   responsiveWidth,
// } from 'react-native-responsive-dimensions';
// import Layout from '../components/Layout';
// import Button from '../components/Button';

// const Profile = () => {
//   const [userData, setUserData] = useState({
//     name: '',
//     email: '',
//   });
//   const [modal, setModal] = useState(false);
//   const [imageUrl, setImageUrl] = useState(
//     'data:image/jpeg;base64,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',
//   );
//   const [upload, setUpload] = useState(false);
//   // const takePhoto = async () => {
//   //   await ImagePicker.openCamera({
//   //     width: 300,
//   //     height: 300,
//   //     cropping: true,
//   //     useFrontCamera: true,
//   //   }).then(image => {
//   //     console.log(image.path);
//   //     setImageUrl(image.path);
//   //     setModal(false);
//   //     setUpload(true);
//   //   });
//   // };
//   // const uploadPhoto = async () => {
//   //   await ImagePicker.openPicker({
//   //     width: 300,
//   //     height: 300,
//   //     cropping: true,
//   //   }).then(image => {
//   //     console.log(image);
//   //     setImageUrl(image.path);
//   //     setModal(false);
//   //     setUpload(true);
//   //   });
//   // };
//   const uploadData = async () => {
//     setUpload(false);
//     const items = {
//       nameOfUser: userData.name,
//       emailOfUser: userData.email,
//       profileOfUser: imageUrl,
//     };
//     const serializedItems = JSON.stringify(items);
//     await AsyncStorage.setItem('userProfileData', serializedItems);
//     console.log(serializedItems);
//   };

//   const getData = async () => {
//     const storedItems: any = await AsyncStorage.getItem('userProfileData');
//     if (storedItems !== null) {
//       const deserializedItems = await JSON.parse(storedItems);
//       setImageUrl(deserializedItems.profileOfUser);
//       setUserData(prev => ({
//         ...prev,
//         name: deserializedItems.nameOfUser,
//         email: deserializedItems.emailOfUser,
//       }));
//     }
//   };
//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <Layout>
//       <Modal visible={modal}>
//         <View
//           style={{
//             flex: 1,
//             backgroundColor: Colors.PRIMARY_COLOR,
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}>
//           <View
//             style={{
//               width: '80%',
//               height: '30%',
//               backgroundColor: 'white',
//               padding: 15,
//               borderRadius: 10,
//             }}>
//             <TouchableOpacity
//               style={{
//                 backgroundColor: Colors.PRIMARY_COLOR,
//                 alignItems: 'center',
//                 borderRadius: 10,
//                 padding: 10,
//                 marginVertical: verticalScale(5),
//               }}
//               onPress={() => {
//                 takePhoto();
//               }}>
//               <Text style={{color: 'white'}}>Take Photo</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={{
//                 backgroundColor: Colors.PRIMARY_COLOR,
//                 alignItems: 'center',
//                 borderRadius: 10,
//                 padding: 10,
//                 marginVertical: verticalScale(5),
//               }}
//               onPress={() => {
//                 uploadPhoto();
//               }}>
//               <Text style={{color: 'white'}}>Upload Photo</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={{
//                 backgroundColor: Colors.PRIMARY_COLOR,
//                 alignItems: 'center',
//                 borderRadius: 10,
//                 padding: 10,
//                 marginVertical: verticalScale(5),
//               }}
//               onPress={() => {
//                 setModal(false);
//               }}>
//               <Text style={{color: 'white'}}>Cancel</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//       <View
//         style={{
//           alignSelf: 'center',

//           alignItems: 'center',
//           marginTop: verticalScale(20),
//         }}>
//         <TouchableOpacity
//           activeOpacity={0.8}
//           onPress={() => {
//             setModal(true);
//           }}
//           style={{
//             width: responsiveWidth(50),
//             height: responsiveWidth(50),
//             borderRadius: responsiveHeight(100),
//             overflow: 'hidden',
//           }}>
//           <Image
//             source={{uri: imageUrl}}
//             style={{height: '100%', width: '100%', overflow: 'hidden'}}
//             resizeMode="contain"
//           />
//         </TouchableOpacity>
//       </View>
//       <View
//         style={{
//           marginHorizontal: horizontalScale(10),
//           marginVertical: verticalScale(20),
//         }}>
//         <View
//           style={{
//             flexDirection: 'row',
//             width: '100%',
//             alignItems: 'center',
//             borderWidth: 1,
//             borderColor: Colors.ICON_GRAY,
//             backgroundColor: 'white',
//             marginVertical: verticalScale(10),
//           }}>
//           {/* <Icon
//             name="badge"
//             type="material"
//             size={30}
//             color={Colors.PRIMARY_COLOR}
//             style={{marginHorizontal: 12}}
//           /> */}
//           <TextInput
//             placeholder="Enter your name"
//             placeholderTextColor={Colors.ICON_GRAY}
//             value={userData.name}
//             onChangeText={name => {
//               setUserData(prev => ({
//                 ...prev,
//                 name: name,
//               }));
//               setUpload(true);
//             }}
//             style={{flex: 1}}
//           />
//         </View>
//         <View
//           style={{
//             flexDirection: 'row',
//             width: '100%',
//             alignItems: 'center',
//             borderWidth: 1,
//             borderColor: Colors.ICON_GRAY,
//             backgroundColor: 'white',
//           }}>
//           {/* <Icon
//             name="mail"
//             type="material"
//             size={30}
//             color={Colors.PRIMARY_COLOR}
//             style={{marginHorizontal: 12}}
//           /> */}
//           <TextInput
//             placeholderTextColor={Colors.ICON_GRAY}
//             placeholder="Enter your Email"
//             value={userData.email}
//             onChangeText={email => {
//               setUserData(prev => ({
//                 ...prev,
//                 email: email,
//               }));
//               setUpload(true);
//             }}
//             style={{flex: 1}}
//           />
//         </View>
//       </View>
//       {upload && (
//         <Button
//           title={'Upload'}
//           onPress={uploadData}
//           btnStyle={{
//             width: '80%',
//             alignSelf: 'center',
//             marginTop: 8,
//           }}
//         />
//       )}
//     </Layout>
//   );
// };

// export default Profile;

// const styles = StyleSheet.create({});
