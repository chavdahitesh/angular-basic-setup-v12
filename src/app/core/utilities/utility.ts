export class Utility {
  public mobilePatternRegex = /^(3|6|8|9)\d{7}$/; // 3, 6 , 8 , 9  for singapore 8 digit numbers.
  public emailPatternRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  public postalCodeRegex = '[0-9]{6}';

  numberOnly(event:any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
