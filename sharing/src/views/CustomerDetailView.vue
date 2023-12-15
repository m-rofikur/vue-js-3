<template>
    <h1>This is Detail Of {{ customer.name }}</h1>
    <div>
        <b>Name : {{ customer.name }}</b><br/>
        <b>Email : {{ customer.email }}</b><br/>
        <b>Phone : {{ customer.phone }}</b>
    </div>
</template>

<script>
export default {
    name: "CustomerDetailView",
    props: ['id'],
    data() {
        return {
            customer: {}
        }
    },
    mounted() {
        fetch("http://127.0.0.1:3000/customers/"+ this.id)
            .then(res => res.json())
            .then(data => this.customer = data)
            .catch(e => console.log(e.message))
    }
}
</script>

<style>
</style>