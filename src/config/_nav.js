export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/d',
    icon: 'cil-speedometer',
    badge: {
      color: 'danger',
      text: 'FUTURE'
    }
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Internal Users',
    to: '/d',
    icon: 'cil-user',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'RAA',
        to: '/raa/users',
        badge: {
          color: 'success',
          text: 'NEW'
        }
      }
    ]
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Platform Users',
    to: '/users',
    icon: 'cil-user',
    badge: {
      color: 'danger',
      text: 'FUTURE'
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Support Requests',
    to: '/users',
    icon: 'cil-speech',
    badge: {
      color: 'danger',
      text: 'FUTURE'
    }
  }
];
