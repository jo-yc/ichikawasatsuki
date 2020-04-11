<template lang="pug">
  nav.navbar.wide.transparent.transparent-light.absolute.navbar-expand-lg
    .container-fluid.flex-row.justify-content-center
      .navbar-header
        .navbar-brand
          a(href="/")
            img(src="#" srcset="../assets/images/logo.png 1x, ../assets/images/logo@2x.png 2x" alt="")
        .navbar-hamburger.ml-auto.d-lg-none.d-xl-none
          button.hamburger.animate(data-toggle="collapse" data-target=".navbar-collapse")
            span
      .navbar-collapse.collapse.justify-content-between.align-items-center
        ul.navbar-nav.plain.mx-auto.text-center
          li.nav-item
            a.nav-link(href="/")
              | {{ $t('menu.home') }}
          li.nav-item
            a.nav-link(href="/about")
              | {{ $t('menu.about') }}
          li.nav-item
            a.nav-link(href="/gallery")
              | {{ $t('menu.gallery') }}
          li.nav-item
            a.nav-link(href="/works")
              | {{ $t('menu.works') }}
          li.nav-item
            a.nav-link(href="/books")
              | {{ $t('menu.books') }}
          li.nav-item
            a.nav-link(href="http://blog.ichikawasatsuki.com" target="blank")
              | {{ $t('menu.blog') }}
          li.nav-item
            a.nav-link(href="/contact")
              | {{ $t('menu.contact') }}
      .social-wrapper.text-right
        ul.social.social-mute.social-s.mb-0
          li
            a(href="https://twitter.com/ichikawasatsuki")
              i.fa.fa-twitter
          li
            a(href="https://www.facebook.com/satsukiichikawa.photography")
              i.fa.fa-facebook-f
          li
            a(href="https://www.instagram.com/satsukiichikawa")
              i.fa.fa-instagram
</template>
