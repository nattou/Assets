#pragma strict

function Start () {

}

function Update () {

transform.Rotate( 100 * Time.deltaTime, 0, 100 * Time.deltaTime);
}