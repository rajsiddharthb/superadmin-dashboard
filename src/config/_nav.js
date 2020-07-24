export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'danger',
      text: 'FEAUTURE'
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'User Management',
    to: '/users',
    icon: 'cil-user',
    badge: {
      color: 'info',
      text: 'SOON'
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Consultations',
    to: '/consultations',
    icon: 'cil-calendar',
    badge: {
      color: 'success',
      text: 'NEW'
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Risk Management Alerts',
    to: '/reports',
    icon: 'cil-bell'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Support Requests',
    to: '/reports',
    icon: 'cil-commentSquare'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Reports',
    to: '/reports'
  }
];
