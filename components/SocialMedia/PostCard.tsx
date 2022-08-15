import Image from 'next/image';
import React from 'react';

const PostCard = () => {
  return (
    <Image
      src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c29jaWFsJTIwbWVkaWF8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
      width={300}
      height={300}
    />
  );
};

export default PostCard;
