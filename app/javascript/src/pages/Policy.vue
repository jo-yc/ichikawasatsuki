<template lang="pug">
  .wrapper.light-wrapper
    .container.inner.pt-70
      h2.section-title.mb-40.text-center
        | {{ $t('privacyPolicy.title') }}
      .space20
      .box.bg-white.shadow
        .d-flex.flex-row.justify-content-center
          p.simple_format.policy-box
            | {{ $t('privacyPolicy.policy') }}
</template>
