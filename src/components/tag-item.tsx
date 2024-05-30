import React from 'react';
const TagItem = ({ tag }:{tag:string}) => (
    <div className='badge badge-outline badge-primary'>
      {tag}
    </div>
  );
export default TagItem;