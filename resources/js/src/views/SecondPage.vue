<template>
    <div class="page-wrapper">
        <div class="page-header ms-1">
            <h4 class="m-0">Second page</h4>
            <!-- Breadcrumb -->
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                    <li class="breadcrumb-item active" aria-current="page">Second page</li>
                </ol>
            </nav>
            <!-- #Breadcrumb -->
        </div>

        <div class="page-body p-3">
            <div class="row">
                <h5>This is a second page</h5>

                {{ name }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SecondPage',
    data() {
        return {
            name: 'Srdjan Kordic'
        }
    }
}
</script>
