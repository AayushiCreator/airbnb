'public')));

app.use(errorController.get404);

app.use(errorController.get500);

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`server is listening on port : http://localhost:${PORT}`);
})