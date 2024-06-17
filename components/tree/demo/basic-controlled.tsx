import React, { useState } from 'react';
import { Tree } from 'antd';
import type { TreeDataNode, TreeProps } from 'antd';



<template>
  <el-tree-v2
    ref="treeV2Ref"
    v-loading="loading"
    :data="treeData"
    :props="props.props"
    :check-strictly="props.checkStrictly"
    :showCheckbox="props.showCheckbox"
    @check-change="treeChange"
  >
    <template #default="{ node, data }">
      <span class="prefix" :class="{ 'is-leaf': node.isLeaf }">
        <el-button
          v-if="data.children && data.children.length"
          link
          type="primary"
          @click.stop="nodeClick(node, data)"
          :disabled="node.disabled"
        >
          <slot name="select-all-title">
            [全选]
          </slot>
        </el-button>
        {{ node.label }}
      </span>
    </template>
  </el-tree-v2>
</template>

<script setup>
import { uniq, without } from 'lodash-es';

// 获取全部子节点
/**
 * @description: 
 * @param {Array} list
 * @param {Array} result
 * @return {Array}
 */
const getDeepChildren = (list, result = []) => {
  list.forEach((item) => {
    if (item.children && item.children.length > 0) {
      getDeepChildren(item.children, result);
    }
    !item.disabled && result.push(item.key);
  });
  return result;
};

/**
 * @description: 判断存在未勾选
 * @param {Array} checkedKeys
 * @param {Array} childrens
 * @return {Boolean}
 */
const isCheckAllChildren = (checkedKeys, childrens) => {
  const setCheckedKeys = new Set();
  checkedKeys.forEach((v) => setCheckedKeys.add(v));
  for (let i = 0; i < childrens.length; i += 1) {
    if (!setCheckedKeys.has(childrens[i])) {
      return false;
    }
  }
  return true;
};
/**
 * @description: 全选点击
 * @param {*} node
 * @return {*}
 */
const nodeClick = (node) => {
  if (node.disabled) return false;
  const checkedKeys = treeV2Ref.value?.getCheckedKeys();
  const childrens = [...getDeepChildren(node.children ?? []), node.key]; // 全选-包含本级
  nextTick(() => {
    let list = [];
    if (isCheckAllChildren(checkedKeys, childrens)) {
      // 反选
      list = without(checkedKeys, ...childrens);
      treeV2Ref.value.setCheckedKeys();
    } else {
      list = uniq([...checkedKeys, ...childrens]);
    }
    treeV2Ref.value.setCheckedKeys(list);
    update(list);
  });
};
</script>



const treeData: TreeDataNode[] = [
  {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
        children: [
          { title: '0-0-0-0', key: '0-0-0-0' },
          { title: '0-0-0-1', key: '0-0-0-1' },
          { title: '0-0-0-2', key: '0-0-0-2' },
        ],
      },
      {
        title: '0-0-1',
        key: '0-0-1',
        children: [
          { title: '0-0-1-0', key: '0-0-1-0' },
          { title: '0-0-1-1', key: '0-0-1-1' },
          { title: '0-0-1-2', key: '0-0-1-2' },
        ],
      },
      {
        title: '0-0-2',
        key: '0-0-2',
      },
    ],
  },
  {
    title: '0-1',
    key: '0-1',
    children: [
      { title: '0-1-0-0', key: '0-1-0-0' },
      { title: '0-1-0-1', key: '0-1-0-1' },
      { title: '0-1-0-2', key: '0-1-0-2' },
    ],
  },
  {
    title: '0-2',
    key: '0-2',
  },
];

const App: React.FC = () => {
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>(['0-0-0', '0-0-1']);
  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>(['0-0-0']);
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);

  const onExpand: TreeProps['onExpand'] = (expandedKeysValue) => {
    console.log('onExpand', expandedKeysValue);
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };

  const onCheck: TreeProps['onCheck'] = (checkedKeysValue) => {
    console.log('onCheck', checkedKeysValue);
    setCheckedKeys(checkedKeysValue as React.Key[]);
  };

  const onSelect: TreeProps['onSelect'] = (selectedKeysValue, info) => {
    console.log('onSelect', info);
    setSelectedKeys(selectedKeysValue);
  };

  return (
    <Tree
      checkable
      onExpand={onExpand}
      expandedKeys={expandedKeys}
      autoExpandParent={autoExpandParent}
      onCheck={onCheck}
      checkedKeys={checkedKeys}
      onSelect={onSelect}
      selectedKeys={selectedKeys}
      treeData={treeData}
    />
  );
};

export default App;
