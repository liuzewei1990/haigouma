export default [
    {
        name: '分类',
        icon: '',
        value: 'food',
        showTabHeader: false,
        defaultIcon: '',
        selectIcon: '',
        selectIndex: 0,
        tabs: [
            {
                icon: '',
                name: '',
                selectIndex: 0,
                detailList: [
                    {
                        name: '全部',
                        icon: '',
                        value: '全部',
                        selectIndex: 0,
                        list: [{
                            name: "全部",
                            value: 'all'
                        }]
                    },
                    {
                        name: '一级1',
                        icon: '',
                        value: '一级1',
                        selectIndex: 1,
                        list: [{
                            name: '全部',
                            value: 'all'
                        }, {
                            name: '二级1',
                            value: 'hot pot'
                        }, {
                            name: '二级1',
                            value: 'Sichuan cuisine'
                        }]
                    },
                    {
                        name: '一级2',
                        icon: '',
                        value: '一级2',
                        selectIndex: 2,
                        list: [{
                            name: '全部',
                            value: 'all'
                        }, {
                            name: '二级2',
                            value: 'pizza'
                        }, {
                            name: '二级2',
                            value: 'steak'
                        }]
                    }]
            }]
    }
]