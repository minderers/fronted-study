<template>
    <div class="card">
        <header>
            <slot name="header">
                <h2>默认头部</h2>
            </slot>
        </header>
        <main>
            <slot>
                <h2>
                    默认主体
                </h2>
            </slot>
        </main>
        <footer>
            <slot name="footer">
                <h2>
                    默认底部
                </h2>
            </slot>
        </footer>
    </div>
</template>

<style scoped>
.card {
    border: 1px solid #ccc;
    padding: 10px;

}

header,
footer {
    background-color: #f5f5f5;
    padding: 10px;
}
</style>