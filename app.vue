<script setup>
useHead({
  title: '',
  titleTemplate: title => (title ? `${title} - RB` : 'RB'),
})
</script>


 <template>
  <div>
    <NuxtLayout>
       <NuxtPage />
    </NuxtLayout>
  </div>
</template>
