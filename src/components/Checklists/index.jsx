import React from 'react';

import ChecklistList from './ChecklistList'
import style from './style.module.css'
import {
  Layout
} from 'antd';

const {
  Sider
} = Layout;

export default (props) => (
  <Sider
    breakpoint='xs'
    collapsed={props.collapsed}
    collapsedWidth={0}
    collapsible
    trigger={null}
    width={250}
  >
    <div className={style.logo} />
    <ChecklistList
      {...props}
    />
  </Sider>
)