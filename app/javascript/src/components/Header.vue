<template lang="pug">
  nav.navbar.center.navbar-expand-lg
    .container.flex-lg-column
      .navbar-header
        .navbar-brand
          a(href="/")
            img(src="#" srcset="../assets/images/logo.png 1x, ../assets/images/logo@2x.png 2x" alt="")
        .navbar-hamburger.ml-auto.d-lg-none.d-xl-none
          button.hamburger.animate(data-toggle="collapse" data-target=".navbar-collapse")
      .navbar-collapse.collapse.w-100.bg-light.header
        ul.navbar-nav.nav-fill.w-100
          li.nav-item
            a.nav-link(href="javascript:void(0)")
              | {{ $t('menu.home') }}
          li.nav-item
            a.nav-link(href="/about")
              | {{ $t('menu.about') }}
          li.nav-item
            a.nav-link(href="/gallery")
              | {{ $t('menu.gallery') }}
          li.nav-item
            a.nav-link(href="javascript:void(0)")
              | {{ $t('menu.works') }}
          li.nav-item
            a.nav-link(href="http://blog.ichikawasatsuki.com" target="blank")
              | {{ $t('menu.blog') }}
          li.nav-item
            a.nav-link(href="/contact")
              | {{ $t('menu.contact') }}

</template>
