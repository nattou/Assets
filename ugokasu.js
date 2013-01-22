#pragma strict

function Start () {

}

function Update () {
transform.position.x +=
Input.GetAxis("Horizontal") * (20.0 * Time.deltaTime);
transform.position.z +=
Input.GetAxis("Vertical") * (20.0 * Time.deltaTime);
}