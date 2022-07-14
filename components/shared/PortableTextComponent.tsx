import {
  Avatar,
  useTheme,
  Grid,
  Typography,
  Divider,
  useMediaQuery,
} from '@mui/material';
import { useResponsive } from 'helpers/custom-hooks';

//   export const authorBioPtComponents = {
//     block: {
//       normal: ({ value }) => {
//         const mediaBreakPhoneSmall = useMediaQuery('(max-width: 400px)');
//         const linkImageProfile = value.markDefs[0]?.href;
//         return (
//           <Avatar
//             alt="author image"
//             src={linkImageProfile}
//             style={{
//               width: mediaBreakPhoneSmall ? '6.4rem' : '7.2rem',
//               height: mediaBreakPhoneSmall ? '6.4rem' : '7.2rem',
//               objectFit: 'cover',
//             }}
//           />
//         );
//       },
//     },
//   };

//   const isMarkIdMatch = (childrenMarks, markDefs: {_key: string}[]) => {
//     let isMatch = false;
//     childrenMarks.forEach((mark) => {
//       const matchedMark = markDefs.find((markDef) => markDef._key === mark);
//       if (matchedMark) {
//         isMatch = true;
//       }
//     });
//     return isMatch;
//   };

//   const getLinkHref = (childrenMarks, markDefs) => {
//     let linkHref = '';
//     childrenMarks.forEach((mark) => {
//       const matchedMark = markDefs.find((markDef) => markDef._key === mark);
//       if (matchedMark) {
//         linkHref = matchedMark.href;
//       }
//     });
//     return linkHref;
//   };

//   const isImageDesc = (value) => {
//     return value.children[0].text.includes('image-text');
//   };

//   const getStyleLink = (value, objText) => {
//     const theme = useTheme();
//     return {
//       textDecoration: 'underline',
//       color: isImageDesc(value) ? 'grey' : theme.palette.primary.main,
//       fontStyle: objText.marks.includes('em') ? 'italic' : 'normal',
//       fontWeight: objText.marks.includes('strong') ? 600 : 400,
//     };
//   };

const getStyleListItem = () => {
  const theme = useTheme();
  // const mediaBreakPhone = useMediaQuery('(max-width: 600px)');
  const { Phone } = useResponsive();
  return {
    marginBottom: theme.spacing(1),
    fontSize: Phone ? '1.6rem' : '1.8rem',
    marginLeft: Phone ? theme.spacing(4) : theme.spacing(6),
  };
};

export const ptComponents = {
  // block: {
  //   normal: ({ value }) => {
  //     //* Styling
  //     const theme = useTheme();

  //     //* Media Query
  //     const mediaBreakTablet = useMediaQuery('(max-width: 1100px)');
  //     const mediaBreakPhone = useMediaQuery('(max-width: 660px)');
  //     const mediaBreakPhoneSmall = useMediaQuery('(max-width: 400px)');

  //     // ? For a paragraph / text with link (many children)
  //     if (value.children.length > 1) {
  //       return (
  //         <Grid
  //           item
  //           container={isImageDesc(value) ? true : false}
  //           justifyContent={isImageDesc(value) ? 'center' : 'flex-start'}
  //           style={{
  //             marginBottom: isImageDesc(value) ? 0 : theme.spacing(1),
  //           }}>
  //           <Typography
  //             variant={isImageDesc(value) ? 'body2' : 'body1'}
  //             align={isImageDesc(value) ? 'center' : 'left'}
  //             style={{
  //               // ? for normal text
  //               marginBottom: isImageDesc(value) ? 0 : theme.spacing(1.8),
  //               lineHeight: '3.2rem',
  //             }}>
  //             {value.children.map((objText) => {
  //               // ? Handle link
  //               if (isMarkIdMatch(objText?.marks, value?.markDefs)) {
  //                 return (
  //                   <a
  //                     key={objText._key}
  //                     href={getLinkHref(objText?.marks, value?.markDefs)}
  //                     target={'_blank'}
  //                     rel="noreferrer"
  //                     style={getStyleLink(value, objText)}>
  //                     {objText?.text}
  //                   </a>
  //                 );
  //               }
  //               return (
  //                 <span
  //                   key={objText._key}
  //                   style={{
  //                     // ? Handle italic
  //                     fontStyle: objText.marks.includes('em')
  //                       ? 'italic'
  //                       : 'normal',
  //                     // ? Handle bold
  //                     fontWeight: objText.marks.includes('strong') ? 600 : 400,
  //                     color: isImageDesc(value) ? 'grey' : 'black',
  //                   }}>
  //                   {isImageDesc(value)
  //                     ? objText.text.substring(objText.text.indexOf(':') + 1)
  //                     : objText.text}
  //                 </span>
  //               );
  //             })}
  //           </Typography>
  //         </Grid>
  //       );
  //     }
  //     // ? For one line text (one children)
  //     return value.children.map((objText, idx) => {
  //       // ? for image
  //       if (objText?.text === 'render-image') {
  //         return (
  //           <Grid item key={objText?._key}>
  //             <img
  //               alt={value.children.text || ' '}
  //               src={value?.markDefs[0]?.href}
  //               style={{
  //                 width: '100%',
  //                 height: mediaBreakTablet ? '48vw' : '40vw',
  //                 objectFit: 'cover',
  //                 marginTop: mediaBreakPhone
  //                   ? theme.spacing(1)
  //                   : theme.spacing(2),
  //                 borderRadius: '0.5rem',
  //               }}
  //             />
  //           </Grid>
  //         );
  //       }
  //       if (objText?.text === 'render-full-fit-image') {
  //         return (
  //           <Grid item key={objText?._key}>
  //             <img
  //               alt={value.children.text || ' '}
  //               src={value?.markDefs[0]?.href}
  //               style={{
  //                 width: mediaBreakPhone ? '100%' : '50%',
  //                 height: mediaBreakPhone ? '100vw' : '40vw',
  //                 objectFit: 'contain',
  //                 marginTop: mediaBreakPhone
  //                   ? theme.spacing(1)
  //                   : theme.spacing(2),
  //                 borderRadius: '0.5rem',
  //               }}
  //             />
  //           </Grid>
  //         );
  //       }
  //       // ? for image description
  //       else if (objText.text.includes('image-text')) {
  //         return (
  //           <Grid container justifyContent="center" key={objText._key}>
  //             <Grid item>
  //               <Typography
  //                 align="center"
  //                 variant="body2"
  //                 style={{ color: 'grey' }}>
  //                 {objText.text.substring(objText.text.indexOf(':') + 1)}
  //               </Typography>
  //             </Grid>
  //           </Grid>
  //         );
  //       } else if (objText.text.includes('full-fit-text-image')) {
  //         return (
  //           <Grid
  //             style={{ marginTop: theme.spacing(2) }}
  //             container
  //             justifyContent="center"
  //             key={objText._key}>
  //             <Grid item xs={mediaBreakPhone ? 3.5 : 7}>
  //               <Typography
  //                 align="center"
  //                 variant="caption"
  //                 style={{ color: 'grey' }}>
  //                 {objText.text.substring(objText.text.indexOf(':') + 1)}
  //               </Typography>
  //             </Grid>
  //           </Grid>
  //         );
  //       }
  //       // ? for link
  //       else if (isMarkIdMatch(objText?.marks, value?.markDefs)) {
  //         return (
  //           <Typography key={objText._key}>
  //             <a
  //               href={getLinkHref(objText?.marks, value?.markDefs)}
  //               target={'_blank'}
  //               rel="noreferrer"
  //               style={getStyleLink(value, objText)}>
  //               {objText?.text}
  //             </a>
  //           </Typography>
  //         );
  //       }
  //       // ? for new line (empty text)
  //       else if (objText.text === '') {
  //         return (
  //           <Grid
  //             key={objText._key}
  //             item
  //             style={{
  //               marginBottom: mediaBreakPhone
  //                 ? theme.spacing(1)
  //                 : theme.spacing(3),
  //             }}>
  //             <br />
  //           </Grid>
  //         );
  //       }
  //       // ? for normal text
  //       return (
  //         <Grid
  //           key={objText._key}
  //           item
  //           style={{
  //             marginBottom: theme.spacing(1.8),
  //           }}>
  //           <Typography
  //             style={{
  //               fontStyle: objText.marks.includes('em') ? 'italic' : 'normal',
  //               fontWeight: objText.marks.includes('strong') ? 600 : 400,
  //               lineHeight: '3.2rem',
  //             }}>
  //             {objText.text || '-'}
  //           </Typography>
  //         </Grid>
  //       );
  //     });
  //   },
  //   // h1: ({ children }) => {
  //   //   const mediaBreakPhone = useMediaQuery("(max-width: 660px)");
  //   //   return (
  //   //     <Typography variant={mediaBreakPhone ? "h2" : "h1"}>
  //   //       {children}
  //   //     </Typography>
  //   //   );
  //   // },
  //   // h2: ({ children }) => {
  //   //   const mediaBreakPhone = useMediaQuery("(max-width: 660px)");
  //   //   return (
  //   //     <Typography variant={mediaBreakPhone ? "h3" : "h2"}>
  //   //       {children}
  //   //     </Typography>
  //   //   );
  //   // },
  //   h3: ({ children }) => {
  //     //* Style
  //     const theme = useTheme();

  //     //* Media Query
  //     const mediaBreakPhone = useMediaQuery('(max-width: 600px)');
  //     return (
  //       <Typography
  //         style={{
  //           lineHeight: mediaBreakPhone ? '4.4rem' : '5.2rem',
  //           marginBottom: mediaBreakPhone
  //             ? theme.spacing(1.5)
  //             : theme.spacing(2),
  //           fontWeight: 500,
  //           fontSize: mediaBreakPhone ? '2.8rem' : '3.2rem',
  //           marginTop: mediaBreakPhone ? theme.spacing(3) : theme.spacing(5),
  //         }}>
  //         {children}
  //       </Typography>
  //     );
  //   },
  //   h4: ({ children }) => {
  //     //* Style
  //     const theme = useTheme();

  //     //* Media Query
  //     const mediaBreakPhone = useMediaQuery('(max-width: 600px)');

  //     return (
  //       <Typography
  //         style={{
  //           marginBottom: mediaBreakPhone
  //             ? theme.spacing(1)
  //             : theme.spacing(1.5),
  //           fontWeight: 500,
  //           fontSize: mediaBreakPhone ? '2.4rem' : '2.8rem',
  //           marginTop: mediaBreakPhone ? theme.spacing(3) : theme.spacing(5),
  //         }}>
  //         {children}
  //       </Typography>
  //     );
  //   },
  //   blockquote: ({ children }) => {
  //     //* Style
  //     const theme = useTheme();

  //     return (
  //       <Grid
  //         container
  //         style={{
  //           padding: theme.spacing(2),
  //           backgroundColor: '#F3F1F5',
  //           borderRadius: '0.2rem',
  //           marginBottom: theme.spacing(1.5),
  //         }}>
  //         <Grid item>
  //           <Divider
  //             orientation="vertical"
  //             style={{
  //               height: '100%',
  //               width: '0.2rem',
  //             }}
  //           />
  //         </Grid>
  //         <Grid item xs style={{ marginLeft: theme.spacing(2) }}>
  //           <Typography style={{ fontStyle: 'italic' }}>{children}</Typography>
  //         </Grid>
  //       </Grid>
  //     );
  //   },
  // },
  listItem: {
    bullet: ({ children }: any) => {
      return (
        <li style={getStyleListItem()}>
          <Typography style={{ lineHeight: '3.2rem' }}>{children}</Typography>
        </li>
      );
    },
    number: ({ children }: any) => {
      return (
        <li style={getStyleListItem()}>
          <Typography style={{ lineHeight: '3.2rem' }}>{children}</Typography>
        </li>
      );
    },
  },
};
