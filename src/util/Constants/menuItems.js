import modelIcon from '../../assets/icon-model-management-default-24.svg';
import assetIcon from '../../assets/icon-device-management-default-24.svg';
import clusterIcon from '../../assets/icon-cluster-management-default-24.svg';
import modelActiveIcon from '../../assets/icon-model-management-active-24.svg';
import assetActiveIcon from '../../assets/icon-device-management-active-24.svg';
import clusterActiveIcon from '../../assets/icon-cluster-management-active-24.svg';

export const menuItems = [
    {
        title: 'Model Management',
        url: '',
        iconurl: modelIcon,
        activeIcon: modelActiveIcon,
    },
    {
        title: 'Asset Management',
        iconurl: assetIcon,
        activeIcon: assetActiveIcon,
        submenus: [
            {
                title: 'Asset Overview',
                url: '/',
            },
            {
                title: 'Asset Create / Edit',
                url:''
            },
            {
                title: 'Asset Tree',
                url:''
            },
            {
                title: 'Asset Registration',
                url:''
            },
        ]
    },
    {
        title: 'Cluster Management',
        url: '',
        iconurl: clusterIcon,
        activeIcon: clusterActiveIcon,
        submenus: [
            {
                title: 'Asset Overview',
                url: '/asset-overview',
            },
            {
                title: 'Asset Create/Edit',
                url:'/asset-create-edit'
            },
        ]
    }
];