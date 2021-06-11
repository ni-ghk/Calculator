function calculate(result)
{
    document.getElementById("Display").value = result;
}

function values(result)
{
    document.getElementById("Display").value += result;
}

function res()
{
    try
    {
      calculate(eval(document.getElementById("Display").value))
    } 
    catch (res)
    {
      calculate('Error')
    }
}