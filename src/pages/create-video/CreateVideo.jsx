// import React from "react";
// import {
//   Card,
//   Spacer,
//   Button,
//   Text,
//   Input,
//   Row,
//   Checkbox,
//   Container,
// } from "@nextui-org/react";
// import { create } from "ipfs-http-client";
// import { Buffer } from "buffer";

// const CreateVideo = () => {
//   const projectId = "2NDnX3FBkiSEzi5iVx0AzEBJ53x";
//   const projectSecret = "2c26b834c83c60cf3a5bd2dd0b7d82ba";
//   const auth =
//     "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");
//   const client = create({
//     host: "ipfs.infura.io",
//     port: 5001,
//     headers: {
//       authorization: auth,
//     },
//   });
//   const handleSubmit = () => {
//     console.log("submited");
//   };
//   const onChange = async (e) => {
//     const file = e.target.files[0];
//     try {
//       const added = await client.add(file);
//       //   const url = `https://decine.infura-ipfs.io/ipfs/${added.path}`;
//     } catch (error) {
//       console.log("Error uploading file: ", error);
//     }
//   };
//   return (
//     <div>
//       <Container
//         display="flex"
//         alignItems="center"
//         justify="center"
//         css={{ minHeight: "100vh", w: "100%" }}
//       >
//         <form onSubmit={handleSubmit} style={{ width: "100%" }}>
//           <Card css={{ mw: "100%", p: "20px" }}>
//             <Text
//               size={24}
//               weight="bold"
//               css={{
//                 as: "center",
//                 mb: "20px",
//               }}
//             >
//               Upload A Video
//             </Text>
//             <Input
//               clearable
//               bordered
//               fullWidth
//               color="primary"
//               size="lg"
//               placeholder="Title"
//             />
//             <Spacer y={1} />
//             <Input
//               clearable
//               bordered
//               fullWidth
//               color="primary"
//               size="lg"
//               placeholder="Description"
//             />
//             <Spacer y={1} />
//             <input
//               //   clearable
//               //   bordered
//               //   fullWidth
//               //   color="primary"
//               //   size="lg"
//               placeholder="Video"
//               type="file"
//               onChange={onChange}
//             />
//             <Spacer y={1} />
//             <Input
//               clearable
//               bordered
//               fullWidth
//               color="primary"
//               size="lg"
//               placeholder="Thumbnail"
//             />
//             <Row justify="space-between">
//               <Checkbox>
//                 <Text size={14}>+18 content</Text>
//               </Checkbox>
//             </Row>
//             <Spacer y={1} />
//             <Row css={{ justifyContent: "flex-end" }}>
//               <Button css={{ width: "200px" }} type="submit">
//                 Upload
//               </Button>
//             </Row>
//           </Card>
//         </form>
//       </Container>
//     </div>
//   );
// };
// export default CreateVideo;
