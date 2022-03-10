package com.rn_assignment_kd;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class DeviceModule extends ReactContextBaseJavaModule {
    //constructor
    public DeviceModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }
    //Mandatory function getName that specifies the module name
    @Override
    public String getName() {
        return "Device";
    }
    //Custom function that we are going to export to JS
    @ReactMethod
    public double calculateOnAndroid(double firstNumber, double secondNumber, double selectedOperator, Callback cb) {
        int[] mathOperator = new int[]{
                (int) (firstNumber + secondNumber),
                (int) (firstNumber - secondNumber),
                (int) (firstNumber * secondNumber),
                (int) (firstNumber / secondNumber),
        };

        try{
            cb.invoke( mathOperator[(int) selectedOperator]);

        }catch (Exception e){
            cb.invoke(e.toString(), null);
        }
        return firstNumber + secondNumber;
    }
}