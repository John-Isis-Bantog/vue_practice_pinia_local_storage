<script setup>
    import Radio from './UI/Radio.vue';
    import Modal from './UI/Modal.vue';
    import Table from './UI/Table.vue';
</script>

<template>
   <div class="">
        <Radio/>
        <div class="flex justify-between m-4 max-w-4xl mx-auto">
            <h1>Task</h1>
              <Modal/>
        </div>
        <Table/>
    </div>
</template>
